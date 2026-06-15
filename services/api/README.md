# open-regatta API service

FastAPI service that exposes mocked GPS, weather, polar, and route data.

## Run locally

1. Create and activate a virtual environment.
2. Optional: copy `.env.example` to `.env` and adjust values.
3. Install dependencies:

   pip install -r requirements.txt

4. Start the API from this folder:

   uvicorn app.main:app --reload --port 8000

5. Visit docs:

   http://localhost:8000/docs

## Environment variables

- `OPEN_REGATTA_CORS_ORIGINS`: comma-separated allowed origins.
- `OPEN_REGATTA_DATA_DIR`: optional path to directory containing example JSON files.
