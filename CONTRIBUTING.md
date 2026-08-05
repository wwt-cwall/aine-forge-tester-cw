# Contributing to Aine Forge Tester

Thank you for your interest in contributing to Aine Forge Tester! This document provides guidelines for contributing to this React/TypeScript web application.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Standards](#code-standards)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)
- [Project Structure](#project-structure)

## Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher
- A modern web browser for testing

### Installation

1. Fork and clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/aine-forge-tester-cw.git
   cd aine-forge-tester-cw
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`

### Available Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run test         # Run tests once
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage
npm run lint         # Run ESLint
```

## Development Workflow

### Before You Start

1. Check existing issues or create a new one to discuss your proposed changes
2. Read the [AGENTS.md](./AGENTS.md) file for detailed project conventions
3. Familiarize yourself with the codebase structure

### Making Changes

1. Create a new branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following our [code standards](#code-standards)

3. Write or update tests for your changes

4. Ensure all checks pass:
   ```bash
   npm run lint        # Check code quality
   npm run test        # Run tests
   npm run build       # Verify production build
   ```

5. Commit your changes with clear, descriptive messages:
   ```bash
   git commit -m "Add feature: description of what you added"
   ```

## Code Standards

### TypeScript

- **Strict mode**: All TypeScript strict checks are enabled
- **No unused variables**: Code must not have unused locals or parameters
- **Type safety**: Avoid `any` types; use proper type definitions
- **Interfaces**: Define props interfaces for all components

### React Components

- Use **functional components** with hooks (no class components)
- Name component files in **PascalCase** (e.g., `Counter.tsx`)
- Co-locate styles: each component has its own `.css` file
- Co-locate tests: each component has a `.test.tsx` file

Example component structure:
```tsx
import { useState } from 'react'
import './ComponentName.css'

interface ComponentNameProps {
  propName?: string
}

function ComponentName({ propName = 'default' }: ComponentNameProps) {
  // Component logic
  return <div className="component-name">...</div>
}

export default ComponentName
```

### Styling

- Use **plain CSS** (no preprocessors or CSS-in-JS)
- Prefix class names with component name (e.g., `.counter-button`)
- Keep global styles minimal (only in `src/index.css`)
- Follow mobile-first responsive design approach

### File Organization

```
src/
├── components/       # Reusable components
│   ├── Counter.tsx
│   ├── Counter.css
│   └── Counter.test.tsx
├── pages/           # Route-level pages
│   ├── Home.tsx
│   └── Home.css
├── App.tsx          # Main app with routing
└── main.tsx         # Entry point
```

## Testing

### Writing Tests

- Use **Vitest** with **React Testing Library**
- Test user interactions, not implementation details
- Use `data-testid` attributes for querying elements
- Aim for meaningful tests, not just coverage numbers

Example test:
```tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Counter from './Counter'

describe('Counter', () => {
  it('increments count when button is clicked', () => {
    render(<Counter />)
    const button = screen.getByRole('button', { name: /increment/i })
    fireEvent.click(button)
    expect(screen.getByText('Count: 1')).toBeInTheDocument()
  })
})
```

### Running Tests

```bash
npm run test              # Run all tests
npm run test:watch        # Watch mode for development
npm run test:coverage     # Generate coverage report
```

All tests must pass before submitting a pull request.

## Submitting Changes

### Pull Request Process

1. **Update documentation**: If you add features, update relevant docs
2. **Run all checks**: Ensure lint, tests, and build all pass
3. **Push your branch**: Push to your fork on GitHub
4. **Open a pull request**: 
   - Use a clear, descriptive title
   - Reference any related issues
   - Describe what changed and why
   - Include screenshots for UI changes

### Pull Request Checklist

- [ ] Code follows project conventions (see [AGENTS.md](./AGENTS.md))
- [ ] Tests added/updated and passing
- [ ] Linting passes (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] Documentation updated if needed
- [ ] Commit messages are clear and descriptive

### CI/CD Pipeline

All pull requests run through GitHub Actions CI:
- **Lint**: ESLint checks code quality
- **Test**: Vitest runs all tests
- **Build**: Vite builds for production

Your PR must pass all checks before it can be merged.

## Project Structure

This is a **React 18** single-page application built with:
- **Vite** for fast development and building
- **TypeScript** for type safety
- **React Router** for navigation
- **Vitest** and **React Testing Library** for testing
- **GitHub Pages** for deployment

Key files:
- `src/App.tsx` - Main app component with routing
- `src/components/` - Reusable UI components
- `src/pages/` - Route-level page components
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration

## Getting Help

- **Documentation**: Check [AGENTS.md](./AGENTS.md) for detailed conventions
- **Issues**: Browse or create [GitHub issues](https://github.com/wwt-cwall/aine-forge-tester-cw/issues)
- **Questions**: Open a discussion or issue for clarification

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the project
- Show empathy towards other contributors

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to Aine Forge Tester! 🚀
