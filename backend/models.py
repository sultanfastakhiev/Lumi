from email.policy import default
from enum import unique
import ormar
from core.db import BaseMeta
from uuid import UUID, uuid4
from passlib.hash import bcrypt
from typing import Optional
import datetime


class User(ormar.Model):
    class Meta(BaseMeta):
        pass

    id: UUID = ormar.UUID(primary_key=True, default=uuid4)
    last_name: str = ormar.String(max_length=50, nullable=True)
    name: str = ormar.String(max_length=50, nullable=True)
    patronymic: Optional[str] = ormar.String(max_length=50, nullable=True)
    birthday: Optional[str] = ormar.String(max_length=1000, nullable=True)
    username: str = ormar.String(max_length=50, unique=True)
    password_hash: str = ormar.String(max_length=128)

    @classmethod
    async def get_user(cls, username):
        return cls.get(username=username)

    def verify_password(self, password):
        return bcrypt.verify(password, self.password_hash)


class Patient(ormar.Model):
    class Meta(BaseMeta):
        pass

    id: UUID = ormar.UUID(primary_key=True, default=uuid4)
    last_name: str = ormar.String(max_length=50, nullable=True)
    name: str = ormar.String(max_length=50, nullable=True)
    patronymic: Optional[str] = ormar.String(max_length=50, nullable=True)
    birthday: Optional[str] = ormar.String(max_length=1000, nullable=True)
    consultations: Optional[str] = ormar.String(max_length=1000, nullable=True)
    diagnosis: Optional[str] = ormar.String(max_length=1000, nullable=True)
    operations: Optional[str] = ormar.String(max_length=1000, nullable=True)
    doctor: UUID = ormar.UUID()
    created_at: datetime.datetime = ormar.DateTime(default=datetime.datetime.utcnow)
