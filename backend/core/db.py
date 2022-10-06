import databases
import ormar
import sqlalchemy
from settings import settings

postgres_dsn = (
    f"postgresql://{settings.postgres_user}:{settings.postgres_password}@{settings.postgres_host}:"
    f"{settings.postgres_port}/{settings.postgres_db}"
)

metadata = sqlalchemy.MetaData()
database = databases.Database(postgres_dsn)
engine = sqlalchemy.create_engine(postgres_dsn)


class BaseMeta(ormar.ModelMeta):
    database = database
    metadata = metadata