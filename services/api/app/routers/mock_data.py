from fastapi import APIRouter

from app.models.domain import GpsPoint, GpsSnapshot, PolarDiagram, RoutePlaceholder, WeatherSnapshot
from app.services.data_loader import load_example_json

router = APIRouter(prefix="/api/v1", tags=["mock-data"])


@router.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "service": "open-regatta-api"}


@router.get("/gps/current", response_model=GpsSnapshot)
def get_gps_current() -> GpsSnapshot:
    gps_data = load_example_json("gps-sample.json")
    return GpsSnapshot.model_validate(gps_data["current"])


@router.get("/gps/track", response_model=list[GpsPoint])
def get_gps_track() -> list[GpsPoint]:
    gps_data = load_example_json("gps-sample.json")
    return [GpsPoint.model_validate(point) for point in gps_data["track"]]


@router.get("/weather/current", response_model=WeatherSnapshot)
def get_weather_current() -> WeatherSnapshot:
    weather_data = load_example_json("weather-sample.json")
    return WeatherSnapshot.model_validate(weather_data)


@router.get("/polar/current", response_model=PolarDiagram)
def get_polar_current() -> PolarDiagram:
    polar_data = load_example_json("polar-sample.json")
    return PolarDiagram.model_validate(polar_data)


@router.get("/route/placeholder", response_model=RoutePlaceholder)
def get_route_placeholder() -> RoutePlaceholder:
    # Future routing engine output will be served from this endpoint.
    return RoutePlaceholder(
        start={"lat": 57.7089, "lon": 11.9746},
        end={"lat": 57.6500, "lon": 11.8500},
        note="Placeholder route only. Weather and constraints are not yet applied."
    )
