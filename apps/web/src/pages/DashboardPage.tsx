import { useEffect, useState } from "react";
import { Panel } from "../components/Panel";
import { apiClient } from "../services/apiClient";
import type {
  GpsPoint,
  GpsSnapshot,
  PolarDiagram,
  RoutePlaceholder,
  WeatherSnapshot
} from "../types/domain";

type DashboardState = {
  gpsCurrent?: GpsSnapshot;
  gpsTrack: GpsPoint[];
  weather?: WeatherSnapshot;
  polar?: PolarDiagram;
  route?: RoutePlaceholder;
  error?: string;
};

export function DashboardPage() {
  const [state, setState] = useState<DashboardState>({ gpsTrack: [] });

  useEffect(() => {
    let mounted = true;

    async function loadDashboardData() {
      try {
        const [gpsCurrent, gpsTrack, weather, polar, route] = await Promise.all([
          apiClient.getGpsCurrent(),
          apiClient.getGpsTrack(),
          apiClient.getWeatherCurrent(),
          apiClient.getPolarCurrent(),
          apiClient.getRoutePlaceholder()
        ]);

        if (!mounted) {
          return;
        }

        setState({ gpsCurrent, gpsTrack, weather, polar, route });
      } catch (error) {
        if (!mounted) {
          return;
        }

        setState({
          gpsTrack: [],
          error: error instanceof Error ? error.message : "Unknown loading error"
        });
      }
    }

    loadDashboardData();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <p className="eyebrow">Open-source sailing navigation platform</p>
        <h1>open-regatta</h1>
        <p>Current status: early development foundation with mock services.</p>
      </header>

      {state.error ? <div className="error-banner">Data load error: {state.error}</div> : null}

      <div className="dashboard-grid">
        <Panel title="Nautical Chart (Placeholder)">
          <div className="chart-placeholder">
            <p>Chart rendering is planned for Phase 1.</p>
            <p>
              Future: integrate open chart sources and user-provided chart layers.
            </p>
          </div>
        </Panel>

        <Panel title="Current GPS Position">
          {state.gpsCurrent ? (
            <ul className="compact-list">
              <li>Vessel: {state.gpsCurrent.vesselId}</li>
              <li>Latitude: {state.gpsCurrent.position.lat.toFixed(5)}</li>
              <li>Longitude: {state.gpsCurrent.position.lon.toFixed(5)}</li>
              <li>Timestamp: {new Date(state.gpsCurrent.position.timestamp).toLocaleString()}</li>
            </ul>
          ) : (
            <p>Loading GPS data...</p>
          )}
        </Panel>

        <Panel title="Track / Position List">
          {state.gpsTrack.length > 0 ? (
            <ol className="track-list">
              {state.gpsTrack.map((point) => (
                <li key={point.timestamp}>
                  <span>
                    {new Date(point.timestamp).toLocaleTimeString()} - {point.lat.toFixed(4)}, {" "}
                    {point.lon.toFixed(4)}
                  </span>
                  <span>
                    SOG {point.sogKnots ?? "-"} kn / COG {point.cogDegrees ?? "-"}
                  </span>
                </li>
              ))}
            </ol>
          ) : (
            <p>Loading track history...</p>
          )}
        </Panel>

        <Panel title="Weather (Mock Wind)">
          {state.weather ? (
            <ul className="compact-list">
              <li>Source: {state.weather.source}</li>
              <li>Wind speed: {state.weather.windSpeedKnots} kn</li>
              <li>Wind direction: {state.weather.windDirectionDegrees} deg</li>
              <li>Updated: {new Date(state.weather.timestamp).toLocaleString()}</li>
            </ul>
          ) : (
            <p>Loading weather data...</p>
          )}
        </Panel>

        <Panel title="Yacht Polar (Mock)">
          {state.polar ? (
            <>
              <p>Vessel: {state.polar.vesselName}</p>
              <table className="polar-table">
                <thead>
                  <tr>
                    <th>TWA (deg)</th>
                    <th>TWS (kn)</th>
                    <th>Boat Speed (kn)</th>
                  </tr>
                </thead>
                <tbody>
                  {state.polar.points.slice(0, 6).map((point, index) => (
                    <tr key={`${point.twaDegrees}-${point.twsKnots}-${index}`}>
                      <td>{point.twaDegrees}</td>
                      <td>{point.twsKnots}</td>
                      <td>{point.boatSpeedKnots}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <p>Loading polar diagram...</p>
          )}
        </Panel>

        <Panel title="Route Planning (Placeholder)">
          {state.route ? (
            <ul className="compact-list">
              <li>
                Start: {state.route.start.lat.toFixed(3)}, {state.route.start.lon.toFixed(3)}
              </li>
              <li>
                End: {state.route.end.lat.toFixed(3)}, {state.route.end.lon.toFixed(3)}
              </li>
              <li>Note: {state.route.note}</li>
            </ul>
          ) : (
            <p>Loading route placeholder...</p>
          )}
        </Panel>
      </div>
    </div>
  );
}
