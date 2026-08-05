# Navigation

**Concept:** [Component System](../component-system.md)

## Overview

The navigation system provides consistent site-wide navigation through a navbar component that displays links to all pages with visual indication of the current page.

## Implementation

### Components
- `src/components/Navbar.tsx` - Main navigation component
- `src/components/ThemeToggle.tsx` - Theme switcher button

### Props
```tsx
interface NavbarProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}
```

### Routing Integration
Uses React Router v7's `NavLink` component for navigation with automatic active state management.

## User Interface

### Layout
The navbar consists of two sections:
1. **Brand section** (left) - Logo emoji (🚀) and site title
2. **Links section** (right) - Navigation links to all pages

### Navigation Links
Eight links displayed in order:
1. 🏠 Home - `/`
2. 📚 Getting Started - `/getting-started`
3. 🤖 AINE Forge - `/aine-forge`
4. 🚀 Forge Guide - `/forge-guide`
5. 🎮 Tic Tac Toe - `/tic-tac-toe`
6. ⚔️ War of 1812 - `/war-1812`
7. 🐍 US Snakes - `/snakes-usa`
8. 🩺 Health - `/health`

Each link includes:
- Emoji icon for visual identification
- Text label
- Active state styling when on that page

### Theme Toggle
The navbar also includes a theme toggle button that allows users to switch between light and dark modes. See [Theme Toggle](theme-toggle.md) for details.

## Behavior

### Active State
The link for the current page receives the `active` class:
```tsx
className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
```

**Visual indication:**
- Active link has different background color
- User always knows which page they're on

### Navigation
Clicking a link:
1. Navigates to the target route
2. Updates URL in browser
3. Renders the corresponding page component
4. Updates active state on navbar

### Client-Side Routing
All navigation is client-side:
- No page reloads
- Instant navigation
- Browser back/forward buttons work
- URL updates correctly

## Styling

### Navbar Container
- Fixed or sticky positioning (based on CSS)
- Full width
- Consistent height
- Background color with transparency

### Brand Section
- Logo and title grouped together
- Larger font size for title
- Aligned to left

### Links Section
- Links displayed horizontally
- Aligned to right
- Responsive spacing

### Link States
- **Default:** Base styling
- **Hover:** Visual feedback on hover
- **Active:** Highlighted when current page
- **Focus:** Keyboard navigation visible

## Responsive Design

### Desktop
- All links visible in horizontal layout
- Brand and links on same row
- Adequate spacing between elements

### Mobile
The current implementation shows all links horizontally. Future enhancement could add:
- Hamburger menu for small screens
- Collapsible navigation
- Vertical link layout

## Accessibility

### Semantic HTML
- `<nav>` element for navigation landmark
- Proper link elements

### Keyboard Navigation
- All links keyboard accessible
- Tab order follows visual order
- Focus states visible

### Screen Readers
- Navigation landmark announced
- Link text descriptive
- Current page indicated by active state

## Technical Details

### React Router Integration
```tsx
import { NavLink } from 'react-router-dom'

<NavLink 
  to="/path" 
  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
>
  Link Text
</NavLink>
```

### Base Path
Router configured with basename for GitHub Pages:
```tsx
<Router basename="/aine-forge-tester/">
```

All navigation links are relative to this base path.

### CSS Classes
- `.navbar` - Container
- `.navbar-content` - Inner wrapper
- `.navbar-brand` - Brand section
- `.navbar-logo` - Logo emoji
- `.navbar-title` - Site title
- `.navbar-links` - Links container
- `.nav-link` - Individual link
- `.nav-link.active` - Active link state

## Edge Cases

### Direct URL Access
- User can navigate directly to any URL
- Navbar correctly shows active state
- Works with browser refresh

### Invalid Routes
- No 404 page currently implemented
- Invalid routes show blank content
- Navbar still renders and functions

### Browser Navigation
- Back button works correctly
- Forward button works correctly
- Active state updates on browser navigation

## Testing

### Current Status
No test file exists for Navbar component.

### Recommended Tests
- Renders all navigation links
- Links have correct href attributes
- Active class applied to current page link
- Clicking link navigates to correct page
- Brand section renders correctly

## Future Enhancements

### Potential Additions
- **Mobile menu** - Hamburger menu for small screens
- **Dropdown menus** - Nested navigation for more pages
- **Search** - Search functionality in navbar
- **User menu** - User profile/settings dropdown
- **Breadcrumbs** - Secondary navigation showing page hierarchy
- **Skip link** - Accessibility feature to skip to main content

### Responsive Improvements
- Breakpoint at 768px for mobile layout
- Hamburger icon with slide-out menu
- Touch-friendly tap targets on mobile

The navigation system provides essential site-wide navigation with clear visual feedback and proper routing integration.
