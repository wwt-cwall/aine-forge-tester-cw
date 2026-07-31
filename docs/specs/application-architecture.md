# Application Architecture

## Overview

Aine Forge Tester is a client-side single-page application built with React 18 and TypeScript, using Vite as the build tool and development server. The application is deployed to GitHub Pages and serves as a testing ground for agentic coding tools.

## Technology Stack

### Core Framework
- **React 18.2.0** - UI library with functional components and hooks
- **TypeScript 5.9.3** - Static typing with strict mode enabled
- **React Router 7.18.1** - Client-side routing

### Build & Development
- **Vite 4.5.14** - Build tool and dev server
- **@vitejs/plugin-react** - React Fast Refresh support
- **ES2020** - Target JavaScript version

### Testing
- **Vitest 0.34.0** - Unit test runner
- **@testing-library/react 14.0.0** - Component testing utilities
- **@testing-library/jest-dom 6.1.0** - DOM matchers
- **jsdom 22.1.0** - DOM implementation for tests

### Code Quality
- **ESLint 8.57.1** - Linting with TypeScript support
- **@typescript-eslint/eslint-plugin** - TypeScript-specific rules
- **eslint-plugin-react-hooks** - React Hooks rules
- **eslint-plugin-react-refresh** - Fast Refresh compatibility checks

## Project Structure

```
aine-forge-tester/
├── .github/workflows/     # CI/CD configuration
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable React components
│   ├── pages/            # Route-level page components
│   ├── test/             # Test configuration
│   ├── App.tsx           # Main app with routing
│   ├── App.css           # App-level styles
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── docs/                 # Specifications
├── index.html            # HTML entry point
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── tsconfig.node.json    # TypeScript config for build tools
├── package.json          # Dependencies and scripts
├── AGENTS.md            # AI agent guidance
└── README.md            # Project documentation
```

## Entry Points

### HTML Entry Point
`index.html` serves as the single HTML file for the SPA. It includes:
- Root div with id `root` for React mounting
- Vite module script loading `src/main.tsx`

### JavaScript Entry Point
`src/main.tsx` initializes the React application:
- Creates React root on `#root` element
- Wraps `<App />` in `<React.StrictMode>`
- Imports global styles from `index.css`

### Application Root
`src/App.tsx` defines the application structure:
- Configures `BrowserRouter` with basename `/aine-forge-tester/`
- Renders `<Navbar />` component
- Defines routes using React Router's `<Routes>` and `<Route>`
- Includes footer with project tagline

## Routing

The application uses React Router v7 with the following routes:

| Path | Component | Purpose |
|------|-----------|---------|
| `/` | `Home` | Landing page with features and demos |
| `/getting-started` | `GettingStarted` | Onboarding and test scenarios |
| `/aine-forge` | `AineForge` | Information about agentic coding |
| `/forge-guide` | `ForgeGuide` | User guide for Forge |

### Base Path Configuration
The application is deployed to GitHub Pages at `/aine-forge-tester/`:
- Router configured with `basename="/aine-forge-tester/"`
- Vite configured with `base: '/aine-forge-tester/'`

These settings ensure assets and navigation work correctly when deployed to a subdirectory.

## Build Configuration

### Vite Configuration (`vite.config.ts`)
- **Plugins**: React plugin with Fast Refresh
- **Base path**: `/aine-forge-tester/` for GitHub Pages
- **Test configuration**: Vitest with jsdom environment

### TypeScript Configuration (`tsconfig.json`)
- **Target**: ES2020
- **Module**: ESNext with bundler resolution
- **JSX**: react-jsx (automatic runtime)
- **Strict mode**: Enabled with all strict checks
- **Linting**: `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`

### Build Output
- Production builds output to `dist/` directory
- TypeScript compilation followed by Vite bundling
- Assets are optimized and hashed for caching

## Development Workflow

### Available Commands
```bash
npm run dev          # Start dev server at http://localhost:5173
npm run build        # TypeScript compilation + Vite build
npm run preview      # Preview production build locally
npm run lint         # Run ESLint on .ts and .tsx files
npm run test         # Run tests once
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
```

### Development Server
- Runs on `http://localhost:5173` by default
- Hot Module Replacement (HMR) enabled
- React Fast Refresh for instant component updates

## Styling Approach

### CSS Architecture
- **Plain CSS** - No preprocessors or CSS-in-JS
- **Component-scoped** - Each component has its own `.css` file
- **Global styles** - `src/index.css` for app-wide styles
- **Naming convention** - Class names prefixed with component name

### Style Organization
- Component styles co-located with component files
- Page styles in `src/pages/*.css`
- Global styles define CSS variables and base styles
- Responsive design with mobile-first approach

## State Management

The application uses React's built-in state management:
- **useState** - Local component state
- **Props** - Data flow from parent to child
- No global state management library (Redux, Zustand, etc.)

This simple approach is appropriate for the application's current scope.

## Deployment

The application is deployed to GitHub Pages via GitHub Actions:
- Automatic deployment on push to `main` branch
- Build artifacts uploaded from `dist/` directory
- Served at `https://wwt-cwall.github.io/aine-forge-tester/`

See [CI/CD Pipeline](ci-cd-pipeline.md) for deployment details.

## Design Principles

### Component Design
- Functional components with hooks (no class components)
- TypeScript interfaces for all props
- Co-located tests and styles
- Single responsibility principle

### Code Quality
- Strict TypeScript checking
- ESLint enforcement
- Comprehensive test coverage
- Consistent naming conventions

### Developer Experience
- Fast development server with HMR
- Instant test feedback with Vitest
- Clear error messages from TypeScript
- Simple project structure

## Future Considerations

The architecture supports future enhancements:
- Adding global state management if needed
- Implementing data fetching with React Query or similar
- Adding more complex routing patterns
- Integrating backend APIs
- Implementing authentication

The current architecture provides a solid foundation while remaining simple and maintainable.
