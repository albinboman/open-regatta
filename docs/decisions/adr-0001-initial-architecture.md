# ADR-0001: Initial architecture and stack

- Status: Accepted
- Date: 2026-06-15

## Context

open-regatta needs a clean initial structure with separation between user interface,
service logic, and shared domain concepts. The first milestone uses mocked data and
must remain easy for contributors to run locally.

## Decision

Use a monorepo layout with:

- React + TypeScript + Vite frontend in `apps/web`
- Python FastAPI backend in `services/api`
- Shared domain model package in `packages/shared`
- Example mock datasets in `data/examples`
- Architecture and planning docs in `docs`

Python was selected for backend/core service direction because future routing, geospatial,
weather, and performance calculations are likely to benefit from Python's scientific and
geospatial ecosystem.

## Consequences

Positive:

- Good long-term fit for routing/weather computation needs
- Clear modular boundaries from day one
- Easy to replace mock services incrementally

Trade-offs:

- Two language environments (Node.js and Python) in local development
- Shared domain models need explicit synchronization strategy over time

## Follow-up

- Define shared schema/source-of-truth strategy for domain contracts
- Add simulator services for GPS and weather refresh
- Introduce first routing engine interfaces
