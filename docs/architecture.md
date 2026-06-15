# Architecture

## Frontend

- Stack: React + TypeScript + Vite
- Location: `apps/web`
- Responsibility: present dashboard UI for charts, GPS, weather, polar, and routing placeholders
- Current state: calls API endpoints and displays mocked responses

## Backend/API

- Stack: Python FastAPI
- Location: `services/api`
- Responsibility: serve mocked navigation domain data loaded from `data/examples`
- Current state: simple REST endpoints for health, GPS current/track, weather, polar, and route placeholder

## Shared models

- Location: `packages/shared`
- Responsibility: centralize domain terms and shape definitions
- Current state: TypeScript model definitions and a shared domain model document

## Data flow

1. Example JSON files live in `data/examples`.
2. FastAPI service loads JSON and validates with Pydantic models.
3. Frontend fetches data from API endpoints.
4. Dashboard components render each panel independently.

## Future extension points

- Replace chart placeholder with actual nautical chart renderer (open chart sources first)
- Add GPS simulator playback and real GPS/NMEA ingestion service
- Introduce GRIB parsing and weather provider adapters
- Add polar import and calibration logic
- Add routing engine module with weather + polar constraints
- Introduce mobile-oriented shell using shared API/domain contracts
