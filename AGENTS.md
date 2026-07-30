# AGENTS.md

This file provides guidance for AI coding agents working on the **Aine Forge Tester** project.

## Project Overview

This is a TypeScript/React application designed as a testing ground for agentic coding tools. It's a single-page application with routing, built with modern web technologies and deployed to GitHub Pages.

**Purpose**: A sandbox environment for testing and demonstrating AI agent capabilities in web development.

**Tech Stack**:
- React 18 with TypeScript
- Vite (build tool and dev server)
- React Router for navigation
- Vitest + React Testing Library for testing
- ESLint for code quality
- GitHub Actions for CI/CD
- GitHub Pages for deployment

## Project Structure

```
aine-forge-tester/
├── src/
│   ├── components/       # Reusable React components
│   │   ├── *.tsx        # Component implementation
│   │   ├── *.css        # Component-specific styles
│   │   └── *.test.tsx   # Component tests
│   ├── pages/           # Route-level page components
│   │   ├── *.tsx        # Page implementation
│   │   └── *.css        # Page-specific styles
│   ├── test/            # Test configuration
│   ├── App.tsx          # Main app with routing
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── .github/workflows/   # CI/CD pipeline
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev          # Start dev server at http://localhost:5173
```

### Building

```bash
npm run build        # TypeScript compilation + Vite build
npm run preview      # Preview production build locally
```

### Testing

```bash
npm run test              # Run tests once
npm run test:watch        # Run tests in watch mode
npm run test:coverage     # Run tests with coverage report
```

### Linting

```bash
npm run lint         # Run ESLint on .ts and .tsx files
```

## Code Conventions

### TypeScript

- **Strict mode enabled**: All TypeScript strict checks are on
- **No unused variables**: `noUnusedLocals` and `noUnusedParameters` are enforced
- **Target**: ES2020
- **Module resolution**: Bundler mode (Vite)

### React Components

- **Functional components** with hooks (no class components)
- **TypeScript interfaces** for props (named `ComponentNameProps`)
- **File naming**: PascalCase for component files (e.g., `Counter.tsx`)
- **Co-located styles**: Each component has its own `.css` file
- **Co-located tests**: Each component has a `.test.tsx` file

Example component structure:
```tsx
import { useState } from 'react'
import './ComponentName.css'

interface ComponentNameProps {
  propName?: string
}

function ComponentName({ propName = 'default' }: ComponentNameProps) {
  // Component logic
  return <div>...</div>
}

export default ComponentName
```

### Styling

- **Plain CSS** (no preprocessors or CSS-in-JS)
- **Component-scoped**: Use class names prefixed with component name
- **Global styles**: Only in `src/index.css`
- **Responsive design**: Mobile-first approach with media queries

### Testing

- **Vitest** with React Testing Library
- **Test file naming**: `ComponentName.test.tsx`
- **Test IDs**: Use `data-testid` for querying elements
- **Setup**: Global test setup in `src/test/setup.ts`
- **Coverage**: Aim for meaningful tests, not just coverage numbers

Example test structure:
```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ComponentName from './ComponentName'

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName />)
    expect(screen.getByText('...')).toBeInTheDocument()
  })
})
```

### Routing

- **React Router v7** is installed and configured
- **Base path**: `/aine-forge-tester/` (for GitHub Pages)
- **Routes**: Defined in `src/App.tsx`
- **Navigation**: Use the `Navbar` component for consistent navigation

When adding new pages:
1. Create page component in `src/pages/`
2. Add route to `src/App.tsx`
3. Add navigation link to `src/components/Navbar.tsx`

## Development Workflow

### Adding a New Component

1. Create `ComponentName.tsx` in `src/components/`
2. Create `ComponentName.css` for styles
3. Create `ComponentName.test.tsx` for tests
4. Export as default from the component file
5. Import and use in parent components

### Adding a New Page

1. Create `PageName.tsx` in `src/pages/`
2. Create `PageName.css` for page-specific styles
3. Add route in `src/App.tsx`
4. Add navigation link in `src/components/Navbar.tsx`
5. Test navigation works correctly

### Making Changes

1. Read existing code to understand patterns
2. Follow established conventions
3. Write or update tests for your changes
4. Run `npm run lint` to check code quality
5. Run `npm run test` to verify tests pass
6. Run `npm run build` to ensure production build works

## CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment:

- **Trigger**: Push to `main` or pull request
- **Steps**: Install → Lint → Test → Build → Deploy (main only)
- **Deployment**: Automatic to GitHub Pages on successful main branch builds
- **Configuration**: `.github/workflows/ci.yml`

When working on this project, ensure your changes pass all CI checks before considering work complete.

## Important Notes

### Base Path Configuration

The app is deployed to GitHub Pages at `/aine-forge-tester/`, so:
- Vite config has `base: '/aine-forge-tester/'`
- Router has `basename="/aine-forge-tester/"`

Keep these in sync if you need to change the deployment path.

### ESLint Configuration

ESLint is configured with:
- TypeScript support
- React Hooks rules
- React Refresh plugin (for HMR)

The configuration warns about components that break Fast Refresh rules.

### TypeScript Configuration

Two tsconfig files:
- `tsconfig.json` - Main app configuration
- `tsconfig.node.json` - Node/build tool configuration

Don't mix concerns between these files.

## Working with This Project

### Understanding the Codebase

- Start with `src/App.tsx` to understand routing
- Look at existing components in `src/components/` for patterns
- Check `src/pages/` to see how pages are structured
- Review tests to understand expected behavior

### Making Effective Changes

- **Read before writing**: Understand existing patterns
- **Test your changes**: Run the dev server and verify behavior
- **Follow conventions**: Match the style of existing code
- **Keep it simple**: This is a testing ground, not a production app
- **Document as needed**: Update this file if you establish new patterns

### When in Doubt

- Check the README.md for project overview
- Look at similar existing code for patterns
- Run the linter and tests to catch issues early
- The project structure is intentionally simple - keep it that way

## Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Vitest Documentation](https://vitest.dev)
- [React Testing Library](https://testing-library.com/react)
- [React Router](https://reactrouter.com)

---

**Note**: This is a living document. As the project evolves and new patterns emerge, update this file to reflect current conventions and best practices.
