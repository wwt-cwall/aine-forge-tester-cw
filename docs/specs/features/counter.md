# Counter Component

**Concept:** [Component System](../component-system.md)

## Overview

An interactive counter component that allows users to increment, decrement, and reset a numeric value. Demonstrates basic React state management and user interaction patterns.

## Implementation

### Component
`src/components/Counter.tsx`

### Test File
`src/components/Counter.test.tsx`

### Style File
`src/components/Counter.css`

## Props

### initialValue
- **Type:** `number`
- **Optional:** Yes
- **Default:** `0`
- **Purpose:** Starting value for the counter

### step
- **Type:** `number`
- **Optional:** Yes
- **Default:** `1`
- **Purpose:** Amount to increment/decrement by

## State

### count
- **Type:** `number`
- **Initial value:** `initialValue` prop
- **Updates:** Via increment, decrement, and reset functions

## User Interface

### Display Section
Shows the current count value:
- Large, prominent number display
- Centered in display area
- Test ID: `counter-value` for testing

### Controls Section
Three buttons arranged horizontally:
1. **Decrement (−)** - Decreases count by step
2. **Reset** - Returns count to initial value
3. **Increment (+)** - Increases count by step

## Behavior

### Increment
When user clicks the + button:
1. Count increases by `step` value
2. Display updates immediately
3. No upper limit

**Implementation:**
```tsx
const increment = () => setCount((prev) => prev + step)
```

### Decrement
When user clicks the − button:
1. Count decreases by `step` value
2. Display updates immediately
3. No lower limit (can go negative)

**Implementation:**
```tsx
const decrement = () => setCount((prev) => prev - step)
```

### Reset
When user clicks the Reset button:
1. Count returns to `initialValue`
2. Display updates immediately
3. Works regardless of current count

**Implementation:**
```tsx
const reset = () => setCount(initialValue)
```

## Examples

### Basic Counter
```tsx
<Counter />
```
- Starts at 0
- Increments/decrements by 1

### Custom Initial Value
```tsx
<Counter initialValue={10} />
```
- Starts at 10
- Increments/decrements by 1
- Resets to 10

### Custom Step
```tsx
<Counter step={5} />
```
- Starts at 0
- Increments/decrements by 5

### Combined
```tsx
<Counter initialValue={100} step={10} />
```
- Starts at 100
- Increments/decrements by 10
- Resets to 100

## Styling

### Display
- Large font size for visibility
- Centered alignment
- Distinct background or border
- Adequate padding

### Buttons
- Equal size and spacing
- Clear visual distinction
- Hover effects for interactivity
- Active/pressed states

### Layout
- Display above controls
- Controls in horizontal row
- Responsive spacing
- Centered container

## Accessibility

### ARIA Labels
All buttons have descriptive aria-labels:
- Increment button: `aria-label="Increment"`
- Decrement button: `aria-label="Decrement"`
- Reset button: `aria-label="Reset"`

### Keyboard Navigation
- All buttons keyboard accessible
- Tab order: decrement → reset → increment
- Enter/Space activates buttons

### Screen Readers
- Buttons announced with labels
- Count value announced when changed
- Clear purpose for each control

## Testing

### Test Coverage
Six tests verify all functionality:

1. **Default initial value**
   - Renders with 0 when no props provided
   - Verifies default behavior

2. **Custom initial value**
   - Renders with provided initialValue
   - Verifies prop handling

3. **Increment functionality**
   - Clicking + button increases count
   - Verifies state update

4. **Decrement functionality**
   - Clicking − button decreases count
   - Verifies state update

5. **Reset functionality**
   - Clicking Reset returns to initial value
   - Works after multiple increments
   - Verifies reset logic

6. **Custom step value**
   - Increments by custom step amount
   - Verifies step prop handling

### Test Patterns
```tsx
it('increments the count when + button is clicked', () => {
  render(<Counter />)
  const incrementButton = screen.getByLabelText('Increment')
  fireEvent.click(incrementButton)
  expect(screen.getByTestId('counter-value')).toHaveTextContent('1')
})
```

## Edge Cases

### Negative Numbers
- Counter can go negative
- No lower bound enforced
- Display shows negative sign

### Large Numbers
- No upper bound enforced
- Display may need overflow handling for very large numbers
- JavaScript number limits apply

### Zero Step
- Not prevented by component
- Would result in no change on increment/decrement
- Could be validated in future

### Decimal Steps
- Supported by implementation
- May result in floating-point precision issues
- Could be rounded in future

## Usage Context

### Home Page
The counter appears on the home page as an interactive demo:
```tsx
<Counter initialValue={0} />
```

Demonstrates:
- Component interactivity
- State management
- User engagement

### Purpose
- Shows working React component
- Provides interactive element
- Serves as testing ground for modifications

## Performance

### Re-renders
- Component re-renders only when count changes
- Efficient state updates with functional setState
- No unnecessary re-renders

### Memory
- Minimal state (single number)
- No memory leaks
- Cleanup handled by React

## Future Enhancements

### Potential Features
- **Min/max bounds** - Limit counter range
- **Validation** - Prevent invalid step values
- **Persistence** - Save count to localStorage
- **Animation** - Animate count changes
- **Keyboard shortcuts** - Arrow keys for increment/decrement
- **Input field** - Allow direct number entry
- **History** - Undo/redo functionality
- **Multiple counters** - Linked counter instances

### Styling Enhancements
- Themes (colors, styles)
- Size variants (small, medium, large)
- Icon buttons instead of text
- Progress bar visualization

The counter component provides a simple, well-tested example of interactive React components with clear state management and user feedback.
