# AI Coding Guidelines for Appointment App

## Architecture Overview
This is a basic Angular 16 application for managing appointments, structured as a single-page application with component-based architecture.

- **Root Component**: `AppComponent` serves as the entry point, currently rendering only the `AppointmentListComponent`
- **Component Structure**: Components follow Angular CLI conventions with separate `.ts`, `.html`, `.css`, and `.spec.ts` files
- **Module System**: Uses `AppModule` for declarations; no feature modules or lazy loading implemented yet
- **Data Flow**: Currently hardcoded data in component properties; no services or state management

## Key Components
- **AppointmentListComponent**: Displays appointment data using string interpolation (`{{appointment}}`)
  - Located in `src/app/appointment-list/`
  - Example: `appointment: string = "Take dog for a walk"`

## Development Workflow
- **Serve**: `ng serve` (runs on http://localhost:4200 with auto-reload)
- **Build**: `ng build` (outputs to `dist/appointment-app`)
- **Test**: `ng test` (uses Karma/Jasmine, runs in Chrome)
- **Generate Components**: `ng generate component <name>` (follows `app-` prefix convention)

## Code Patterns
- **Component Selector**: Uses `app-` prefix (e.g., `<app-appointment-list>`)
- **Property Binding**: Simple string interpolation for data display
- **Testing**: Basic component creation tests using Angular Testing Utilities
- **Imports**: Standard Angular modules (BrowserModule, no FormsModule or RouterModule active yet)

## File Organization
- `src/app/` contains all application code
- Component folders group related files (`.component.ts`, `.component.html`, etc.)
- No services or shared utilities yet

## Dependencies
- Angular 16.1.0 with RxJS 7.8
- Includes Angular Forms and Router (imported but unused)
- Standard CLI tooling for development</content>
<parameter name="filePath">d:\Angular\course 1 udemy\appointment-app\.github\copilot-instructions.md