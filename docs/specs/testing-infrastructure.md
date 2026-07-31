# Testing Infrastructure

## Overview

The application uses Vitest as the test runner with React Testing Library for component testing. The testing setup emphasizes user-centric testing patterns and provides fast feedback during development.

## Test Stack

### Core Testing Libraries
- **Vitest 0.34.0** - Fast unit test framework with Vite integration
- **@testing-library/react 14.0.0** - React component testing utilities
- **@testing-library/jest-dom 6.1.0** - Custom DOM matchers
- **jsdom 22.1.0** - DOM implementation for Node.js

### Configuration

#### Vite Configuration (`vite.config.ts`)
```typescript
test: {
  globals: true,
  environment: 'jsdom',
  setupFiles: './src/test/setup.ts',
}
```

**Settings:**
- `globals: true` - Makes test functions available globally (no imports needed)
- `environment: 'jsdom'` - Simulates browser DOM in Node.js
- `setupFiles` - Runs setup before each test file

#### Test Setup (`src/test/setup.ts`)
```typescript
import '@testing-library/jest-dom'
```

Imports jest-dom matchers for enhanced DOM assertions:
- `toBeInTheDocument()`
- `toHaveTextContent()`
- `toBeVisible()`
- And many more

## Test Commands

### Available Scripts
```bash
npm run test              # Run all tests once
npm run test:watch        # Run tests in watch mode
npm run test:coverage     # Run tests with coverage report
```

### Watch Mode
- Automatically re-runs tests when files change
- Interactive CLI for filtering tests
- Fast feedback loop during development

### Coverage Reports
- Generates coverage statistics
- Identifies untested code paths
- Helps maintain test quality

## Test File Conventions

### File Naming
Test files co-located with components:
- Component: `Counter.tsx`
- Test: `Counter.test.tsx`

### File Structure
```tsx
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ComponentName from './ComponentName'

describe('ComponentName', () => {
  it('test description', () => {
    // Test implementation
  })
})
```

## Testing Patterns

### Rendering Components
```tsx
render(<Counter />)
render(<Counter initialValue={10} />)
```

The `render` function:
- Mounts component in jsdom
- Returns queries and utilities
- Cleans up after each test

### Querying Elements

#### By Test ID
```tsx
screen.getByTestId('counter-value')
```
Used for elements that need reliable selection. Test IDs added with `data-testid` attribute.

#### By Label
```tsx
screen.getByLabelText('Increment')
```
Used for form elements and buttons with `aria-label`. Promotes accessibility.

#### By Text
```tsx
screen.getByText('Hello World')
```
Used for text content. Most user-centric query method.

### User Interactions
```tsx
const button = screen.getByLabelText('Increment')
fireEvent.click(button)
```

Simulates user actions:
- `fireEvent.click()` - Mouse clicks
- `fireEvent.change()` - Input changes
- `fireEvent.submit()` - Form submissions

### Assertions
```tsx
expect(screen.getByTestId('counter-value')).toHaveTextContent('0')
expect(screen.getByText('Hello')).toBeInTheDocument()
```

Common matchers:
- `toBeInTheDocument()` - Element exists in DOM
- `toHaveTextContent(text)` - Element contains text
- `toBeVisible()` - Element is visible
- `toHaveClass(className)` - Element has CSS class

## Test Coverage

### Current Test Files

#### Counter.test.tsx
Tests for the Counter component covering:
- Default initial value (0)
- Custom initial value
- Increment functionality
- Decrement functionality
- Reset to initial value
- Custom step value

**Test count:** 6 tests
**Coverage:** All component functionality

#### FeatureCard.test.tsx
Tests for the FeatureCard component covering:
- Rendering with required props
- Icon display with accessibility
- Title and description rendering

**Test count:** 3 tests (inferred from component simplicity)
**Coverage:** All component functionality

#### Header.test.tsx
Tests for the Header component covering:
- Title rendering
- Optional subtitle rendering
- Subtitle omission when not provided

**Test count:** 3 tests (inferred from component simplicity)
**Coverage:** All component functionality

### Untested Components
The following components currently lack test files:
- `Navbar.tsx` - Navigation component
- All page components (`Home.tsx`, `GettingStarted.tsx`, `AineForge.tsx`, `ForgeGuide.tsx`)

These are candidates for future test coverage.

## Testing Best Practices

### User-Centric Testing
Tests focus on user behavior rather than implementation:
- Query by accessible labels, not internal structure
- Test user interactions, not internal state
- Assert on visible output, not implementation details

### Test Independence
Each test is independent:
- No shared state between tests
- Each test renders fresh component
- Cleanup happens automatically

### Descriptive Test Names
Test descriptions explain what is being tested:
```tsx
it('increments the count when + button is clicked', () => {
  // Clear expectation from description
})
```

### Arrange-Act-Assert Pattern
Tests follow clear structure:
```tsx
it('resets to initial value when Reset button is clicked', () => {
  // Arrange
  render(<Counter initialValue={5} />)
  const resetButton = screen.getByLabelText('Reset')
  
  // Act
  fireEvent.click(resetButton)
  
  // Assert
  expect(screen.getByTestId('counter-value')).toHaveTextContent('5')
})
```

## Testing Components with Props

### Required Props
```tsx
render(<FeatureCard 
  title="Test Title"
  description="Test Description"
  icon="🧪"
/>)
```

### Optional Props
```tsx
// Test with default
render(<Counter />)

// Test with custom value
render(<Counter initialValue={10} step={5} />)
```

### Props Validation
Tests verify component behavior with different prop combinations.

## Testing Interactive Components

### State Changes
```tsx
it('increments the count when + button is clicked', () => {
  render(<Counter />)
  const incrementButton = screen.getByLabelText('Increment')
  
  fireEvent.click(incrementButton)
  
  expect(screen.getByTestId('counter-value')).toHaveTextContent('1')
})
```

### Multiple Interactions
```tsx
it('resets to initial value after multiple increments', () => {
  render(<Counter initialValue={5} />)
  const incrementButton = screen.getByLabelText('Increment')
  const resetButton = screen.getByLabelText('Reset')
  
  fireEvent.click(incrementButton)
  fireEvent.click(incrementButton)
  expect(screen.getByTestId('counter-value')).toHaveTextContent('7')
  
  fireEvent.click(resetButton)
  expect(screen.getByTestId('counter-value')).toHaveTextContent('5')
})
```

## Testing Accessibility

### ARIA Labels
Tests use `getByLabelText` to verify accessibility:
```tsx
const incrementButton = screen.getByLabelText('Increment')
```

This ensures:
- Buttons have proper aria-labels
- Screen readers can identify elements
- Keyboard navigation works

### Semantic HTML
Tests verify proper HTML structure:
```tsx
expect(screen.getByRole('button', { name: 'Increment' }))
```

## CI Integration

Tests run automatically in CI pipeline:
1. Install dependencies
2. Run linter
3. Run tests
4. Build application

Failed tests block deployment. See [CI/CD Pipeline](ci-cd-pipeline.md) for details.

## Future Testing Enhancements

### Potential Additions
- **Integration tests** - Test multiple components together
- **E2E tests** - Test full user workflows with Playwright or Cypress
- **Visual regression tests** - Catch unintended UI changes
- **Performance tests** - Measure render performance
- **Accessibility tests** - Automated a11y checks with axe-core

### Coverage Goals
- Add tests for Navbar component
- Add tests for page components
- Achieve >80% code coverage
- Test error states and edge cases

### Testing Utilities
- Custom render function with providers
- Test data factories
- Shared test utilities
- Mock data generators

The current testing infrastructure provides a solid foundation for comprehensive test coverage while maintaining fast feedback and developer productivity.
