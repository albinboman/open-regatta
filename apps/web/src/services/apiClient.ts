import type {
  GpsPoint,
  GpsSnapshot,
  PolarDiagram,
  RoutePlaceholder,
  WeatherSnapshot
} from "../types/domain";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000";

async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`);
  if (!response.ok) {
    throw new Error(`Failed request ${response.status}: ${path}`);
  }
  return (await response.json()) as T;
}

export const apiClient = {
  getGpsCurrent: (): Promise<GpsSnapshot> => getJson("/api/v1/gps/current"),
  getGpsTrack: (): Promise<GpsPoint[]> => getJson("/api/v1/gps/track"),
  getWeatherCurrent: (): Promise<WeatherSnapshot> => getJson("/api/v1/weather/current"),
  getPolarCurrent: (): Promise<PolarDiagram> => getJson("/api/v1/polar/current"),
  getRoutePlaceholder: (): Promise<RoutePlaceholder> => getJson("/api/v1/route/placeholder")
};
