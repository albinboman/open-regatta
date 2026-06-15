# Domain models

The initial domain model scope is intentionally small and mocked.

- Coordinates: latitude and longitude values
- GPS point: coordinates with timestamp and optional SOG/COG
- Weather snapshot: source, wind speed, wind direction, timestamp
- Polar point: TWA, TWS, expected boat speed
- Route placeholder: start/end coordinates and explanatory note

Planned model expansions:

- Waypoint, route leg, and full route plan constraints
- GRIB metadata and forecast grids
- Boat profile and sail inventory
- NMEA sentence/event structures
