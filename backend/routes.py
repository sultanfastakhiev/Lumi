from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException, Response, UploadFile, File
import jwt
from gleb import Gleb
from max3 import three
from managers.users import authenticate_user, get_user_current
from models import User, Patient
import asyncpg
from schemas import UserAllInfo, UserGet, UserAuth, PatientInfo, PatientsList, PatientInfoUpdate, Predict, Diagnosis, \
    PredictModel, UserEdit, PredictMel, PredictRod, CheckEmail, CheckAnswer
from passlib.hash import bcrypt
from keras.models import load_model
from keras_preprocessing import image
import numpy as np
from io import BytesIO
from PIL import Image
import pandas as pd
import ormar
import pickle


model = load_model('modelrgb.h5')
melanoma = load_model('melanoma_model')
# brain = load_model('brain_modell')


pkl_filename = 'model_75.pkl'
with open(pkl_filename, 'rb') as file:
    pickle_model = pickle.load(file)


class_bol = [
    'Здоров',
    'Гипертензивная [гипертоническая] болезнь с преимущественным поражением сердца без (застойной) сердечной недостаточности',
    'Нарушение сердечного ритма неуточненное'
]


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


@router.post('/check_username')
async def check_username(username: CheckEmail):
    try:
        await User.objects.get(username=username.username)
        return CheckAnswer(answer=False)
    except ormar.exceptions.NoMatch:
        return CheckAnswer(answer=True)


@router.patch('/me')
async def user_edit(new_user: UserEdit, user=Depends(get_user_current)):
    if new_user.password_hash:
        new_user.password_hash = bcrypt.hash(new_user.password_hash)
    user = await User.objects.get(id=user.id)
    try:
        await user.update(**{k: v for k, v in new_user.dict().items() if v})
    except asyncpg.exceptions.UniqueViolationError:
        raise HTTPException(status_code=409, detail="Nickname is already in use")
    return user


@router.get('/me')
async def get_me(user=Depends(get_user_current)):
    user_get = await User.objects.get(id=user.id)
    return user_get


@router.get('/patients')
async def get_patients(user=Depends(get_user_current)):
    result = await Patient.objects.filter(doctor=user.id).order_by(Patient.created_at.asc()).all()
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
async def delete_patient(patient_id: UUID, user=Depends(get_user_current)):
    patient = await Patient.objects.get(id=patient_id)
    if patient.doctor == user.id:
        await patient.delete()
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


@router.post('/test_an')
async def predict_an(file_in: UploadFile = File(...)):
    contents = await file_in.read()
    buffer = BytesIO(contents)
    df = pd.read_csv(buffer, sep=';', decimal=',', dtype={'PatientKey': 'Int32'},
                     encoding='utf-8', parse_dates=['BirthDate', 'LaboratoryResultsDate', 'MinLaboratoryResultsDate'])
    data, pathologies = Gleb(df)
    prediction = pickle_model.predict_proba(data)
    prediction_list = prediction.tolist()
    prediction_list = prediction_list[0]
    new_names, new_predict = three(class_bol, prediction_list)
    return PredictModel(
        predict=[
            Diagnosis(
                title=new_names[i],
                value=round(d * 100, 2),
                pathologies=pathologies
            ) for i, d in enumerate(new_predict[0:3])
        ]
    )


@router.post('/melanoma')
async def mel_test(file_mel: UploadFile = File(...)):
    file_read = await file_mel.read()
    img = read_imagefile(file_read)
    img = img.resize((224, 224))
    img_tensor = image.img_to_array(img)
    img_tensor = np.expand_dims(img_tensor, axis=0)
    img_tensor /= 255.
    prediction = melanoma.predict(img_tensor)
    pp = prediction.tolist()
    return PredictMel(Predict=[PredictRod(
        title="nevus",
        value=round(pp[0][0] * 100, 2)
    ), PredictRod(
        title="melanoma",
        value=round(pp[0][1] * 100, 2)
    )])


# @router.post('/brain')
# async def mel_test(file_mel: UploadFile = File(...)):
#     file_read = await file_mel.read()
#     img = read_imagefile(file_read)
#     img = img.resize((256, 256))
#     img_tensor = image.img_to_array(img)
#     img_tensor = np.expand_dims(img_tensor, axis=0)
#     img_tensor /= 255.
#     prediction = brain.predict(img_tensor)
#     pp = prediction.tolist()
#     return PredictMel(Predict=[PredictRod(
#         title="glioma",
#         value=round(pp[0][0] * 100, 2)
#     ), PredictRod(
#         title="meningioma",
#         value=round(pp[0][1] * 100, 2)
#     ), PredictRod(
#         title="no tumor",
#         value=round(pp[0][2] * 100, 2)
#     ), PredictRod(
#         title="p tumor",
#         value=round(pp[0][3] * 100, 2)
#     )])
