from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException, Response, UploadFile, File
import jwt
from managers.users import authenticate_user, get_user_current
from models import User, Patient
import asyncpg
from schemas import UserAllInfo, UserGet, UserAuth, PatientInfo, PatientsList, PatientInfoUpdate, Predict
from passlib.hash import bcrypt
from keras.models import load_model
from keras_preprocessing import image
import numpy as np
from io import BytesIO
from PIL import Image


model = load_model('modelrgb.h5')

JWT_SECRET = 'myjwtsecret'

router = APIRouter(
    prefix=""
)


@router.post('/')
async def auth(data: UserAuth):
    user = await authenticate_user(data.username, data.password_hash)
    if not user:
        return {'error' : 'invaid credentials'}
    user = UserGet(
        id=str(user.id),
        username=user.username,
        password_hash=user.password_hash
    )
    token = jwt.encode(user.dict(), JWT_SECRET)
    return {'access_token' : token, 'token_type' : 'bearer'}


@router.post('/reg')
async def register(user: UserAllInfo):
    try:
        user.password_hash = bcrypt.hash(user.password_hash)
        user_dict = user.dict()
        await User.objects.create(**user_dict)
    except asyncpg.exceptions.UniqueViolationError:
        raise HTTPException(status_code=400, detail="User already exists")
    return Response(status_code=200, content="User created")


@router.get('/patients')
async def get_patients(user=Depends(get_user_current)):
    result = await Patient.objects.all(doctor=user.id)
    return PatientsList(
        result=result
    )


@router.get('/patients/{patient_id}')
async def get_patient(patient_id: UUID):
    patient = await Patient.objects.get(id=patient_id)
    return patient


@router.patch('/patients/{patient_id}')
async def update_patient_info(patient_id: UUID, update_patient: PatientInfoUpdate):
    patient = await Patient.objects.get(id=patient_id)
    await patient.update(**{k: v for k, v in update_patient.dict().items() if v})
    return patient


@router.post('/patients/create_patient')
async def create_patient(patient: PatientInfo, user=Depends(get_user_current)):
    patient.doctor = user.id
    patient_dict = patient.dict()
    await Patient.objects.create(**patient_dict)
    return Response(status_code=200, content="Patient created")


@router.delete('/patients/{patient_id}')
async def delete_patient(patient_id: UUID):
    await Patient.objects.delete(id=patient_id)
    return Response(status_code=200, content="User deleted")


def read_imagefile(file) -> Image.Image:
    image = Image.open(BytesIO(file))
    return image


@router.post('/test')
async def predict_api(file: UploadFile = File(...)):
    file_read = await file.read()
    img = read_imagefile(file_read)
    img = img.resize((200, 200))
    img_tensor = image.img_to_array(img)
    img_tensor = np.expand_dims(img_tensor, axis=0)
    img_tensor /= 255.
    prediction = model.predict(img_tensor)
    prediction_list = (max(prediction)*100).tolist()
    return Predict(
        cyst=round(prediction_list[0], 2),
        normal=round(prediction_list[1], 2),
        stone=round(prediction_list[2], 2),
        tumor=round(prediction_list[3], 2)
    )
