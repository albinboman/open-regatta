# Backlog - GitHub issue drafts

## 1) Set up nautical chart rendering

- Title: Set up nautical chart rendering foundation
- Description: Replace chart placeholder with a real rendering component and evaluate open chart data source options.
- Acceptance criteria:
  - Chart component renders pan/zoom map area in the dashboard
  - At least one open chart source is integrated for development use
  - Rendering architecture supports future additional chart formats
- Suggested labels: `feature`, `charts`, `frontend`

## 2) Add simulated GPS track playback

- Title: Add simulated GPS track playback controls
- Description: Extend mocked GPS behavior to support timeline playback for demo and development.
- Acceptance criteria:
  - User can start/pause/reset a playback sequence
  - Position updates over time and updates track panel
  - Playback speed multiplier is available
- Suggested labels: `feature`, `gps`, `simulation`

## 3) Add real GPS input support

- Title: Add real GPS input support service
- Description: Create adapter layer for real GPS input streams and connect to API endpoints.
- Acceptance criteria:
  - Service accepts GPS input from at least one real source type
  - API can switch between simulated and live GPS sources
  - Input validation and error handling are implemented
- Suggested labels: `feature`, `gps`, `backend`

## 4) Add GRIB file loading support

- Title: Add GRIB file loading and parsing support
- Description: Implement backend capability to import and parse GRIB weather files.
- Acceptance criteria:
  - User can load a GRIB file through API or configured folder
  - Parsed wind fields are accessible through weather endpoints
  - Unsupported GRIB variants return clear errors
- Suggested labels: `feature`, `weather`, `backend`

## 5) Add automatic weather file fetching

- Title: Add automatic weather file fetching workflow
- Description: Support scheduled or on-demand weather file retrieval from configured providers.
- Acceptance criteria:
  - Fetch job can run on demand and by schedule
  - Downloaded files are versioned with timestamp metadata
  - Failure retries and logs are implemented
- Suggested labels: `feature`, `weather`, `automation`

## 6) Add polar diagram import

- Title: Add yacht polar diagram import
- Description: Allow importing user-defined polar diagrams in common structured formats.
- Acceptance criteria:
  - Import endpoint accepts at least one structured format
  - Imported data is validated and normalized
  - UI displays imported polar set and metadata
- Suggested labels: `feature`, `polar`, `backend`, `frontend`

## 7) Add dynamic polar performance update logic

- Title: Add dynamic polar performance adjustment logic
- Description: Add runtime adjustments to baseline polar values using observed performance data.
- Acceptance criteria:
  - Adjustment algorithm can apply correction factors by wind ranges
  - Original and adjusted polar values are both accessible
  - Configuration toggles dynamic updates on/off
- Suggested labels: `feature`, `polar`, `routing`

## 8) Add basic route planning model

- Title: Add basic route planning domain model
- Description: Introduce route plan entities for start/end, waypoints, constraints, and metadata.
- Acceptance criteria:
  - Shared model includes route plan, route leg, and waypoint structures
  - API endpoint accepts and returns route plan payloads
  - Validation catches invalid coordinates and route sequences
- Suggested labels: `feature`, `routing`, `shared-models`

## 9) Add first routing engine prototype

- Title: Add first weather-routing prototype
- Description: Implement initial routing engine prototype using polar and weather inputs.
- Acceptance criteria:
  - Engine computes candidate route between start and end points
  - Output includes ETA estimate and route point list
  - Known limitations are documented in API/docs
- Suggested labels: `feature`, `routing`, `backend`

## 10) Add NMEA 0183 input support

- Title: Add NMEA 0183 sentence ingestion
- Description: Implement parser and input pipeline for NMEA 0183 data.
- Acceptance criteria:
  - Supports key sentence types for position and speed
  - Parsed data is exposed via live state endpoints
  - Invalid sentences are tracked with diagnostics
- Suggested labels: `feature`, `nmea`, `integration`

## 11) Investigate NMEA 2000 support

- Title: Investigate NMEA 2000 integration strategy
- Description: Evaluate practical options for NMEA 2000 support and document recommended architecture.
- Acceptance criteria:
  - Technical options and constraints are documented
  - Recommended implementation path is proposed
  - Risks and licensing/protocol constraints are identified
- Suggested labels: `research`, `nmea`, `architecture`

## 12) Improve mobile/responsive UI

- Title: Improve mobile and tablet usability
- Description: Refine dashboard layout and interactions for mobile and tablet form factors.
- Acceptance criteria:
  - Main dashboard panels are readable and navigable on small screens
  - Touch-first interactions are tested for key controls
  - Responsive behavior is documented
- Suggested labels: `enhancement`, `frontend`, `mobile`

## 13) Define chart format support strategy

- Title: Define chart format support strategy
- Description: Document priority chart formats, adapters, and long-term compatibility approach.
- Acceptance criteria:
  - Candidate chart formats are compared
  - Recommended phased support plan is documented
  - Trade-offs and licensing considerations are included
- Suggested labels: `architecture`, `charts`, `research`

## 14) Add example sailing scenario dataset

- Title: Add example sailing scenario dataset
- Description: Provide richer sample data including route goals, weather timeline, and polar profiles.
- Acceptance criteria:
  - Dataset includes coherent GPS, weather, and polar files for one scenario
  - Data can be loaded by API without code changes
  - Dataset documentation explains intended use
- Suggested labels: `data`, `examples`, `developer-experience`

## 15) Add contribution guidelines

- Title: Add contribution guidelines and workflow
- Description: Create contributor documentation for setup, coding standards, and pull request workflow.
- Acceptance criteria:
  - `CONTRIBUTING.md` explains local setup for frontend and backend
  - Pull request checklist is included
  - Code style and testing expectations are defined
- Suggested labels: `documentation`, `good first issue`, `community`
