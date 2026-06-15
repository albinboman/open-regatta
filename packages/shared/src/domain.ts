export type Coordinates = {
  lat: number;
  lon: number;
};

export type GpsPoint = Coordinates & {
  timestamp: string;
  sogKnots?: number;
  cogDegrees?: number;
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

export type RoutePlaceholder = {
  start: Coordinates;
  end: Coordinates;
  note: string;
};
