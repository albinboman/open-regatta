# open-regatta

open-regatta is an open-source sailing navigation and routing platform for both cruising and racing use cases.

## Vision

The long-term goal is a modular platform that supports:

- Nautical chart display
- GPS positioning and track plotting
- Weather and GRIB workflows
- Yacht polar diagrams and performance modeling
- Route planning and weather routing
- NMEA instrument integration

## Current status

Early development (Foundation milestone). The project currently provides a minimal dashboard and mock API service using example data.

## Architecture overview

- `apps/web`: React + TypeScript + Vite web dashboard
- `services/api`: Python FastAPI mock API
- `packages/shared`: shared domain model definitions and notes
- `data/examples`: mock GPS, weather, and polar datasets
- `docs`: architecture notes, roadmap, ADRs, and backlog issue drafts

## Getting started

### Prerequisites

- Node.js 20+
- Python 3.11+

### 1) Start backend API

From `services/api`:

0. Copy `.env.example` to `.env` if you want to override defaults.
1. `python -m venv .venv`
2. `.venv\Scripts\activate`
3. `pip install -r requirements.txt`
4. `uvicorn app.main:app --reload --port 8000`

### 2) Start web frontend

From `apps/web`:

0. Copy `.env.example` to `.env` if needed.
1. `npm install`
2. `npm run dev`

Open `http://localhost:5173`.

## Development commands

Backend:

- `uvicorn app.main:app --reload --port 8000`

Frontend:

- `npm run dev`
- `npm run build`
- `npm run preview`

## Configuration

Backend (`services/api`):

- `OPEN_REGATTA_CORS_ORIGINS`: comma-separated allowed origins for CORS.
- `OPEN_REGATTA_DATA_DIR`: optional absolute or relative path to sample JSON data directory.

Frontend (`apps/web`):

- `VITE_API_BASE_URL`: backend base URL, for example `http://localhost:8000`.

## Preparing for GitHub push

You do not need a separate anonymized copy. Keep this repo as the canonical source and avoid committing machine-specific files:

- Virtual environments (`.venv`) are ignored by `.gitignore`.
- Local env files (`.env`, `.env.*`) are ignored; only `.env.example` is tracked.
- Dependencies are installed from `requirements.txt` and `package.json`, not from local absolute paths.

Recommended check before push:

1. `git status --short`
2. Verify no `.venv`, no `.env`, and no absolute local paths are listed.
3. Commit and push.

## Issue Automation (Optional)

This repo supports commit-driven GitHub issue creation from seed files.

- Workflow: `.github/workflows/create-issues-from-seed.yml`
- Seed folder: `.github/issue-seed/`

Current setup is intentionally empty, so no issues are generated unless you add new seed `.md` files (other than `README.md`).

## Roadmap summary

- Phase 0: Foundation
- Phase 1: Navigation basics
- Phase 2: Weather and polar support
- Phase 3: Routing engine
- Phase 4: Sensor integrations
- Phase 5: Cross-device/mobile

See `docs/roadmap.md` for details.

## License

Apache 2.0.

## Contributing

Contributions are welcome. Please start by reviewing architecture and roadmap docs, and backlog drafts in `docs/backlog.md`.