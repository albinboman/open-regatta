export type Coordinates = {
  lat: number;
  lon: number;
};

export type GpsPoint = Coordinates & {
  timestamp: string;
  sogKnots?: number;
  cogDegrees?: number;
};

export type GpsSnapshot = {
  vesselId: string;
  position: GpsPoint;
};

export type WeatherSnapshot = {
  source: string;
  timestamp: string;
  windSpeedKnots: number;
  windDirectionDegrees: number;
};

export type PolarPoint = {
  twaDegrees: number;
  twsKnots: number;
  boatSpeedKnots: number;
};

export type PolarDiagram = {
  vesselName: string;
  points: PolarPoint[];
};

export type RoutePlaceholder = {
  start: Coordinates;
  end: Coordinates;
  note: string;
};
