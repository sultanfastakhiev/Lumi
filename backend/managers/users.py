from models import User
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
import jwt
from uuid import UUID


JWT_SECRET = 'myjwtsecret'

oauth2_scheme = OAuth2PasswordBearer(tokenUrl='token')

async def authenticate_user(username: str, password: str):
    user = await User.objects.get(username=username)
    if not user:
        return False
    if not user.verify_password(password):
        return False
    return user


async def get_user_current(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=['HS256'])
        user = await User.objects.get(id=UUID(payload['id']))
    except:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid username or password')
    return user


