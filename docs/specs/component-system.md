# Component System

## Overview

The application uses a functional React component architecture with TypeScript, following modern React best practices. All components are functional components using hooks, with co-located styles and tests.

## Component Conventions

### File Structure
Each component consists of three files:
- `ComponentName.tsx` - Component implementation
- `ComponentName.css` - Component-specific styles
- `ComponentName.test.tsx` - Component tests

### Component Template
```tsx
import './ComponentName.css'

interface ComponentNameProps {
  propName: string
  optionalProp?: number
}

function ComponentName({ propName, optionalProp = 0 }: ComponentNameProps) {
  // Component logic
  return <div className="component-name">...</div>
}

export default ComponentName
```

### TypeScript Patterns
- **Props interface**: Named `ComponentNameProps`
- **Default exports**: Components exported as default
- **Optional props**: Use `?` with default values in destructuring
- **Strict typing**: All props and state fully typed

## Component Categories

### Reusable Components (`src/components/`)
Small, reusable UI components that can be used across multiple pages.

#### Counter
Interactive counter with increment, decrement, and reset functionality.

**Props:**
- `initialValue?: number` - Starting count (default: 0)
- `step?: number` - Increment/decrement amount (default: 1)

**State:**
- `count: number` - Current counter value

**Features:**
- Three buttons: increment (+), decrement (−), reset
- Displays current count value
- Accessible with aria-labels
- Test ID on counter value for testing

#### FeatureCard
Display card for showcasing application features.

**Props:**
- `title: string` - Feature title
- `description: string` - Feature description
- `icon: string` - Emoji icon

**Features:**
- Icon with role="img" and aria-label
- Title and description text
- Styled as a card with hover effects

#### Header
Page header component with title and optional subtitle.

**Props:**
- `title: string` - Main heading
- `subtitle?: string` - Optional subheading

**Features:**
- Renders h1 for title
- Conditionally renders subtitle paragraph
- Consistent styling across pages

#### Navbar
Navigation bar with links to all pages and theme toggle.

**Props:**
- `theme: 'light' | 'dark'` - Current theme
- `onToggleTheme: () => void` - Theme toggle callback

**Features:**
- Brand section with logo emoji and title
- Navigation links using React Router's `NavLink`
- Active state styling for current page
- Theme toggle button
- Responsive design for mobile and desktop

**Implementation:**
- Uses `NavLink` with `isActive` callback for styling
- Links to all eight routes: Home, Getting Started, AINE Forge, Forge Guide, Tic Tac Toe, War of 1812, US Snakes, Health
- Emoji icons for visual identification
- Integrates ThemeToggle component

#### ThemeToggle
Button for switching between light and dark themes.

**Props:**
- `theme: 'light' | 'dark'` - Current theme
- `onToggle: () => void` - Toggle callback

**Features:**
- Displays sun (☀️) icon in dark mode, moon (🌙) in light mode
- Icon represents the theme user will switch TO
- Accessible with aria-label and title
- Keyboard accessible button

**Implementation:**
- Controlled component receiving theme state from parent
- Calls onToggle callback when clicked
- Theme state managed in App.tsx
- Theme persisted to localStorage

### Page Components (`src/pages/`)
Route-level components that represent full pages.

#### Home
Landing page with feature showcase and interactive demo.

**Features:**
- Header with title and subtitle
- Features grid displaying four feature cards
- Interactive counter demo section
- Call-to-action section linking to AINE Forge page

**State:**
- `features` array with feature data (TypeScript, React 18, Vite, Testing)

#### GettingStarted
Onboarding page with test scenarios and quick start information.

**Features:**
- Introduction to the testing ground
- Six scenario cards suggesting test tasks
- Quick start commands with descriptions
- Project structure visualization

**Content:**
- Beginner to advanced test scenarios
- npm commands for development workflow
- ASCII art project structure

#### AineForge
Information page about agentic coding assistants.

**Features:**
- Introduction to AINE Forge
- Comparison: Traditional AI vs Agentic Assistants
- Six productivity benefit cards
- Six capability cards
- Five-step workflow visualization
- Key features list
- Links to other agentic assistants (Devin, Claude Code)

**Content:**
- Educational content about autonomous coding
- Productivity statistics and benefits
- External links with proper attributes

#### ForgeGuide
Comprehensive user guide for working with Forge.

**Features:**
- Visual interface demo with styled screenshot placeholder
- Six feature cards explaining Forge capabilities
- Four-step workflow guide with examples
- Six capability items
- User expectations section with communication examples
- Four pro tips
- Call-to-action section

**Content:**
- Good vs bad example comparisons
- Numbered workflow steps
- Communication style guidance

#### HealthCheck
Simple health status page displaying application metadata.

**Features:**
- Displays status (always "ok")
- Shows version number (0.1.0)
- Shows current timestamp in ISO format
- Clean card layout with label-value pairs

**Implementation:**
- Uses `getHealthStatus()` utility function from `healthCheck.ts`
- Timestamp generated fresh on each render
- Test IDs for all values

#### TicTacToe
Interactive tic-tac-toe game with two modes.

**State:**
- `board: Board` - 3x3 grid of cells (X, O, or null)
- `currentPlayer: Player` - Current player ('X' or 'O')
- `gameMode: GameMode` - 'pvp' or 'pvc'
- `isComputerThinking: boolean` - Computer move in progress

**Features:**
- Player vs Player mode
- Player vs Computer mode with minimax AI
- Win detection for all 8 possible lines
- Draw detection
- Game reset functionality
- Status messages for game state
- 500ms delay for computer moves (UX)

**Implementation:**
- Minimax algorithm for optimal computer play
- useEffect hook triggers computer moves
- Unbeatable AI opponent
- Full test coverage

#### War1812
Educational page about War of 1812 repercussions.

**Content:**
- Overview of the war
- Impact on United States (4 sections)
- Impact on Canada (2 sections)
- Impact on Native Americans (3 sections, marked as negative)
- International repercussions (3 sections)
- Long-term consequences (4 items in grid)
- Conclusion with quote

**Features:**
- Card-based layout for impacts
- Special styling for negative impacts
- Grid layout for consequences
- Educational, balanced perspective
- Multiple stakeholder viewpoints

#### SnakesUSA
Educational resource about US snake species.

**Data:**
- 8 venomous snake species
- 15 non-venomous snake species
- Each with name, scientific name, regions, size, description

**Features:**
- Safety tips section (4 tips)
- Venomous snakes section with red badges
- Non-venomous snakes section with green badges
- Interesting facts section (6 facts)
- Conservation message
- Grid layouts for cards

**Implementation:**
- Static data arrays in component
- Color-coded badges for venomous status
- Comprehensive species information
- Educational focus

## Component Patterns

### State Management
Components use `useState` for local state:
```tsx
const [count, setCount] = useState(initialValue)
```

### Event Handlers
Event handlers defined as arrow functions:
```tsx
const increment = () => setCount((prev) => prev + step)
```

### Conditional Rendering
Optional content rendered with logical AND:
```tsx
{subtitle && <p className="header-subtitle">{subtitle}</p>}
```

### List Rendering
Arrays mapped to components with keys:
```tsx
{features.map((feature) => (
  <FeatureCard key={feature.id} {...feature} />
))}
```

### Navigation
React Router's `Link` and `NavLink` for navigation:
```tsx
<Link to="/aine-forge" className="cta-button">
  Learn About AINE Forge →
</Link>
```

## Styling Patterns

### Class Naming
Classes prefixed with component or page name:
- Component: `.counter`, `.counter-display`, `.counter-button`
- Page: `.home-page`, `.features-section`, `.demo-section`

### CSS Variables
Global CSS variables defined in `src/index.css`:
- Colors, spacing, typography
- Used consistently across components

### Responsive Design
Mobile-first approach with media queries:
```css
.features-grid {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### Interactive States
Hover and active states for interactive elements:
```css
.counter-button:hover {
  transform: translateY(-2px);
}

.nav-link.active {
  background: rgba(255, 255, 255, 0.1);
}
```

## Testing Patterns

### Test Structure
Tests use Vitest and React Testing Library:
```tsx
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ComponentName from './ComponentName'

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName />)
    expect(screen.getByText('...')).toBeInTheDocument()
  })
})
```

### Query Methods
- `getByTestId` - For elements with data-testid
- `getByLabelText` - For form elements and buttons with aria-label
- `getByText` - For text content

### User Interactions
Simulate user actions with `fireEvent`:
```tsx
fireEvent.click(incrementButton)
expect(screen.getByTestId('counter-value')).toHaveTextContent('1')
```

## Accessibility

### Semantic HTML
- Proper heading hierarchy (h1, h2, h3)
- Semantic elements (header, nav, main, section, footer)

### ARIA Attributes
- `aria-label` on buttons for screen readers
- `role="img"` on decorative emoji icons
- `aria-label` on icons for context

### Keyboard Navigation
- All interactive elements keyboard accessible
- Focus states visible
- Logical tab order

## Component Composition

### Composition Patterns
Pages compose reusable components:
```tsx
<Header title="..." subtitle="..." />
<FeatureCard title="..." description="..." icon="..." />
<Counter initialValue={0} />
```

### Props Spreading
Feature data spread to FeatureCard:
```tsx
<FeatureCard key={feature.id} {...feature} />
```

### Children Pattern
Not currently used, but supported by React:
```tsx
<Container>
  <Content />
</Container>
```

## Best Practices

### Component Design
- Single responsibility - each component does one thing
- Reusability - components designed for multiple contexts
- Composability - components work well together
- Testability - components easy to test in isolation

### Props Design
- Required props without defaults
- Optional props with sensible defaults
- Clear, descriptive prop names
- TypeScript interfaces for type safety

### Performance
- Functional components with hooks (efficient)
- No unnecessary re-renders
- Simple state management
- Fast Refresh for development

## Future Enhancements

The component system can be extended with:
- Form components with validation
- Modal/dialog components
- Loading and error states
- Data fetching components
- Animation components
- Theme provider for dark mode

The current architecture supports these additions while maintaining simplicity and consistency.
