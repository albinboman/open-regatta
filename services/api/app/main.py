import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.mock_data import router as mock_data_router

app = FastAPI(
    title="open-regatta API",
    description="Mock API for navigation and weather routing foundation",
    version="0.1.0"
)

cors_origins_raw = os.getenv(
    "OPEN_REGATTA_CORS_ORIGINS",
    "http://localhost:5173,http://127.0.0.1:5173,http://localhost:4173"
)
cors_origins = [origin.strip() for origin in cors_origins_raw.split(",") if origin.strip()]

app.add_middleware(
    CORSMiddleware,
    allow_origins=cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(mock_data_router)
