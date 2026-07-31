# Feature Cards

**Concept:** [Component System](../component-system.md)

## Overview

A reusable card component for displaying features with an icon, title, and description. Used throughout the application to present information in a consistent, visually appealing format.

## Implementation

### Component
`src/components/FeatureCard.tsx`

### Test File
`src/components/FeatureCard.test.tsx`

### Style File
`src/components/FeatureCard.css`

## Props

### title
- **Type:** `string`
- **Required:** Yes
- **Purpose:** Feature heading displayed prominently

### description
- **Type:** `string`
- **Required:** Yes
- **Purpose:** Detailed explanation of the feature

### icon
- **Type:** `string`
- **Required:** Yes
- **Purpose:** Emoji icon representing the feature visually

## User Interface

### Layout
Three elements stacked vertically:
1. **Icon** - Large emoji at top
2. **Title** - Bold heading below icon
3. **Description** - Body text below title

### Visual Design
- Card container with background
- Padding around content
- Border or shadow for depth
- Hover effects for interactivity

## Behavior

### Static Display
- No interactive behavior
- Pure presentational component
- Content determined by props

### Hover State
- Visual feedback on hover (CSS)
- May include elevation change
- Indicates card is a distinct element

## Accessibility

### Icon Accessibility
```tsx
<span className="feature-icon" role="img" aria-label={title}>
  {icon}
</span>
```

**Attributes:**
- `role="img"` - Identifies emoji as image
- `aria-label={title}` - Provides text alternative
- Screen readers announce title instead of emoji

### Semantic Structure
- Heading element for title (h3)
- Paragraph element for description
- Proper heading hierarchy

## Usage Examples

### Technology Feature
```tsx
<FeatureCard
  title="TypeScript Support"
  description="Full TypeScript support with strict type checking enabled."
  icon="📘"
/>
```

### Capability Feature
```tsx
<FeatureCard
  title="Code Generation"
  description="I can write new code from scratch based on your requirements."
  icon="📝"
/>
```

### Benefit Feature
```tsx
<FeatureCard
  title="Accelerated Development"
  description="Complete routine tasks in minutes instead of hours."
  icon="⚡"
/>
```

## Usage Contexts

### Home Page
Displays four technology features:
- TypeScript Support (📘)
- React 18 (⚛️)
- Vite Build (⚡)
- Testing Ready (🧪)

**Implementation:**
```tsx
{features.map((feature) => (
  <FeatureCard
    key={feature.id}
    title={feature.title}
    description={feature.description}
    icon={feature.icon}
  />
))}
```

### Other Pages
The card pattern is used throughout the application:
- Getting Started page (scenario cards)
- AINE Forge page (capability cards, benefit cards)
- Forge Guide page (feature cards, tip cards)

Note: Some pages implement similar card patterns directly rather than using this component, suggesting opportunities for consolidation.

## Styling

### Card Container
- Background color or gradient
- Border radius for rounded corners
- Padding for internal spacing
- Box shadow or border for depth

### Icon
- Large font size (emoji)
- Centered or left-aligned
- Adequate spacing below

### Title
- Bold or semi-bold font weight
- Larger than body text
- Spacing below

### Description
- Regular font weight
- Readable line height
- Muted color for hierarchy

## Responsive Design

### Desktop
- Cards in grid layout (2-4 columns)
- Adequate spacing between cards
- Hover effects visible

### Mobile
- Single column layout
- Full width cards
- Touch-friendly sizing

## Testing

### Test Coverage
Tests verify:
1. Renders with all required props
2. Icon displays with accessibility attributes
3. Title and description render correctly

### Test Pattern
```tsx
it('renders with required props', () => {
  render(
    <FeatureCard
      title="Test Title"
      description="Test Description"
      icon="🧪"
    />
  )
  expect(screen.getByText('Test Title')).toBeInTheDocument()
  expect(screen.getByText('Test Description')).toBeInTheDocument()
})
```

## Design Patterns

### Composition
FeatureCard is a leaf component:
- Does not compose other components
- Receives all content via props
- Purely presentational

### Reusability
Designed for maximum reusability:
- No hardcoded content
- Flexible props
- Consistent styling
- Works in any context

### Consistency
Provides consistent feature presentation:
- Same layout across all uses
- Predictable styling
- Familiar pattern for users

## Edge Cases

### Long Titles
- May wrap to multiple lines
- Should maintain layout
- Consider max-width or truncation

### Long Descriptions
- May extend card height
- Cards in grid may have uneven heights
- Consider min-height or line clamping

### Missing Icon
- Component expects emoji string
- Empty string would render empty space
- Could add default icon

### Special Characters
- Emoji rendering depends on system
- May appear differently across platforms
- Generally consistent in modern browsers

## Performance

### Rendering
- Lightweight component
- No state or effects
- Fast render time

### Re-renders
- Only re-renders when props change
- Parent controls rendering
- No internal state to trigger updates

## Future Enhancements

### Potential Features
- **Click handler** - Make cards interactive
- **Link wrapper** - Navigate on click
- **Badge** - Add status or category badge
- **Image support** - Use images instead of emoji
- **Action button** - Add CTA button to card
- **Expandable** - Show more content on click

### Styling Variants
- **Size variants** - Small, medium, large
- **Color themes** - Different color schemes
- **Layout variants** - Horizontal layout option
- **Animation** - Entrance animations

### Accessibility Enhancements
- **Focus management** - If made interactive
- **Keyboard navigation** - If made interactive
- **High contrast mode** - Ensure visibility

The FeatureCard component provides a simple, reusable pattern for displaying features consistently across the application with proper accessibility support.
