from uuid import UUID
from pydantic import BaseModel
import orjson
from typing import Optional
import datetime


class BaseSchema(BaseModel):
    class Config:
        anystr_strip_whitespace = True
        min_anystr_length = 1
        json_loads = orjson.loads
        json_dumps = orjson.dumps

class UserAllInfo(BaseSchema):
    last_name: str
    name: str
    patronymic: Optional[str]
    birthday: Optional[str]
    username: str
    password_hash: str


class UserAuth(BaseSchema):
    username: str
    password_hash: str


class UserGet(BaseSchema):
    id: str
    username: str
    password_hash: str


class PatientInfo(BaseSchema):
    last_name: str
    name: str
    patronymic: Optional[str]
    birthday: Optional[str]
    consultations: Optional[str]
    diagnosis: Optional[str]
    operations: Optional[str]
    doctor: Optional[UUID]


class PatientsList(BaseSchema):
    result: list


class PatientInfoUpdate(BaseSchema):
    last_name: Optional[str]
    name: Optional[str]
    patronymic: Optional[str]
    birthday: Optional[str]
    consultations: Optional[str]
    diagnosis: Optional[str]
    operations: Optional[str]
    doctor: Optional[UUID]


class Predict(BaseSchema):
    cyst: float
    normal: float
    stone: float
    tumor: float
