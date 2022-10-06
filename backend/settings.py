from functools import lru_cache
from typing import Optional
from pydantic import BaseSettings


class Settings(BaseSettings):
    loglevel: Optional[str] = "INFO"
    secret_key: str = "you-will-never-guess"
    algorithm: str = "HS256"
    postgres_db: str = "db"
    postgres_user: str = "meta_db_user"
    postgres_password: str = "meta_db_password"
    postgres_host: str = "localhost"
    postgres_port: int = 5432


@lru_cache()
def get_settings() -> Settings:
    return Settings()


settings = get_settings()