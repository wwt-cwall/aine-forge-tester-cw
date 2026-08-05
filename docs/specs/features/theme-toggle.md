# Theme Toggle

**Concept:** [Component System](../component-system.md)

## Overview

The theme toggle component provides a button that allows users to switch between light and dark color themes. The selected theme is persisted in localStorage and applied globally to the application.

## Implementation

### Component
`src/components/ThemeToggle.tsx`

### Props
```tsx
interface ThemeToggleProps {
  theme: 'light' | 'dark'
  onToggle: () => void
}
```

### Integration
The theme toggle is integrated into the Navbar component and receives theme state and toggle handler from the App component.

## User Interface

### Button Display
The button displays an emoji icon that represents the **opposite** theme (the one the user will switch to):
- **Light mode active:** Shows 🌙 (moon) - click to switch to dark
- **Dark mode active:** Shows ☀️ (sun) - click to switch to light

### Accessibility
- `aria-label` attribute describes the action: "Switch to [theme] mode"
- `title` attribute provides tooltip with same information
- Button is keyboard accessible

## Behavior

### Theme Switching
When the button is clicked:
1. `onToggle` callback is invoked
2. App component updates theme state
3. Theme is applied to document root
4. New theme is saved to localStorage
5. Button icon updates to show opposite theme

### Theme Persistence
Theme preference is stored in localStorage:
- **Key:** `theme`
- **Values:** `'light'` or `'dark'`
- **Default:** `'dark'` if no saved preference exists

### Theme Application
Theme is applied via data attribute on document root:
```tsx
// Light mode
document.documentElement.setAttribute('data-theme', 'light')

// Dark mode (default)
document.documentElement.removeAttribute('data-theme')
```

CSS variables respond to the `data-theme` attribute to change colors throughout the application.

## State Management

### App-Level State
Theme state is managed in `App.tsx`:
```tsx
const [theme, setTheme] = useState<'light' | 'dark'>(() => {
  const savedTheme = localStorage.getItem('theme')
  return (savedTheme === 'light' || savedTheme === 'dark') ? savedTheme : 'dark'
})
```

### Effect Hook
Theme changes are applied via useEffect:
```tsx
useEffect(() => {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light')
  } else {
    document.documentElement.removeAttribute('data-theme')
  }
  localStorage.setItem('theme', theme)
}, [theme])
```

### Toggle Function
```tsx
const toggleTheme = () => {
  setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
}
```

## Styling

### Button Styles
- Circular button with icon
- Consistent size and padding
- Hover effects for interactivity
- Positioned in navbar with other navigation elements

### Theme-Specific Styles
CSS variables change based on `data-theme` attribute:
- Background colors
- Text colors
- Border colors
- Component-specific colors

## Technical Details

### CSS Classes
- `.theme-toggle` - Button container
- `.theme-toggle-icon` - Icon wrapper

### localStorage API
```typescript
// Save theme
localStorage.setItem('theme', theme)

// Load theme
const savedTheme = localStorage.getItem('theme')
```

### Type Safety
Theme values are strictly typed as `'light' | 'dark'` to prevent invalid states.

## Edge Cases

### First Visit
- No saved preference exists
- Defaults to dark mode
- User's choice is saved on first toggle

### Invalid localStorage Value
- If localStorage contains invalid value
- Falls back to dark mode default
- Type guard ensures only valid values are used

### Browser Without localStorage
- Component will still function
- Theme won't persist across sessions
- No errors thrown

### Page Refresh
- Theme is restored from localStorage
- Consistent experience across sessions
- No flash of wrong theme

## Testing

### Test File
`src/components/ThemeToggle.test.tsx`

### Test Coverage
- Renders with correct icon for current theme
- Calls onToggle when clicked
- Has proper accessibility attributes
- Button is keyboard accessible

## User Experience

### Visual Feedback
- Icon clearly indicates which theme will be activated
- Smooth transitions between themes
- Consistent styling across all pages

### Intuitive Design
- Common pattern (sun/moon icons)
- Positioned prominently in navbar
- Always accessible regardless of page

## Future Enhancements

### Potential Additions
- **System preference detection** - Respect `prefers-color-scheme` media query
- **More themes** - Add additional color schemes beyond light/dark
- **Smooth transitions** - Animate color changes between themes
- **Theme preview** - Show preview of theme before switching
- **Keyboard shortcut** - Allow theme toggle via keyboard shortcut

The theme toggle provides a simple, accessible way for users to customize their viewing experience with persistent theme preferences.
