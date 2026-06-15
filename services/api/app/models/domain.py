from pydantic import BaseModel


class Coordinates(BaseModel):
    lat: float
    lon: float


class GpsPoint(Coordinates):
    timestamp: str
    sogKnots: float | None = None
    cogDegrees: float | None = None


class GpsSnapshot(BaseModel):
    vesselId: str
    position: GpsPoint


class WeatherSnapshot(BaseModel):
    source: str
    timestamp: str
    windSpeedKnots: float
    windDirectionDegrees: float


class PolarPoint(BaseModel):
    twaDegrees: float
    twsKnots: float
    boatSpeedKnots: float


class PolarDiagram(BaseModel):
    vesselName: str
    points: list[PolarPoint]


class RoutePlaceholder(BaseModel):
    start: Coordinates
    end: Coordinates
    note: str
