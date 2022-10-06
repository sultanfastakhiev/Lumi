from core.db import database
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

# DB_URL = "postgresql://meta_db_user:meta_db_password@localhost:5432/db"

# database = databases.Database(DB_URL)


app = FastAPI()

app.state.database = database

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup() -> None:
    database_= app.state.database
    if not database_.is_connected:
        await database.connect()


@app.on_event("shutdown")
async def shutdown() -> None:
    database_ = app.state.database
    if database_.is_connected:
        await database.disconnect()