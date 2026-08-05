# Health Check Page

**Concept:** [Application Architecture](../application-architecture.md)

## Overview

The Health Check page provides a simple status endpoint that displays the application's current health status, version, and timestamp. This page serves as a basic monitoring and verification tool.

## Implementation

### Page Component
`src/pages/HealthCheck.tsx`

### Utility Module
`src/pages/healthCheck.ts` - Contains health status logic

### Route
`/health`

## User Interface

### Layout
The page displays a card with three rows of information:
1. **Status** - Current health status
2. **Version** - Application version number
3. **Timestamp** - Current timestamp in ISO format

### Visual Design
- Page title: "🩺 Health Check"
- Clean card layout with label-value pairs
- Status displayed prominently
- Consistent spacing and typography

## Data Structure

### HealthStatus Interface
```typescript
export interface HealthStatus {
  status: string
  version: string
  timestamp: string
}
```

### Health Status Function
```typescript
export function getHealthStatus(): HealthStatus {
  return {
    status: 'ok',
    version: '0.1.0',
    timestamp: new Date().toISOString(),
  }
}
```

## Behavior

### Status Display
- **Status:** Always returns `'ok'` (hardcoded)
- **Version:** Static version string `'0.1.0'`
- **Timestamp:** Generated fresh on each page render using `new Date().toISOString()`

### Dynamic Timestamp
The timestamp updates each time the component renders:
- Page load generates new timestamp
- Refresh updates timestamp
- Navigation away and back generates new timestamp

## Styling

### CSS Classes
- `.health-check` - Main container
- `.health-check-title` - Page heading
- `.health-check-card` - Card container
- `.health-check-row` - Individual data row
- `.health-check-label` - Label text
- `.health-check-value` - Value text
- `.health-check-status` - Status-specific styling

### Layout
- Centered content
- Card with padding and border
- Rows with label on left, value on right
- Responsive design

## Testing

### Test File
`src/pages/HealthCheck.test.tsx`

### Test IDs
- `health-status` - Status value
- `health-version` - Version value
- `health-timestamp` - Timestamp value

### Test Coverage
Tests verify:
- Component renders without crashing
- Status displays correctly
- Version displays correctly
- Timestamp is in ISO format
- All test IDs are present

## Use Cases

### Development
- Quick verification that app is running
- Check current version during development
- Verify routing is working

### Monitoring
- Simple health endpoint for monitoring tools
- Can be used for uptime checks
- Provides basic application metadata

### Debugging
- Verify page rendering
- Check timestamp generation
- Confirm component lifecycle

## Technical Details

### Timestamp Format
ISO 8601 format via `toISOString()`:
```
2024-01-15T10:30:45.123Z
```

### Static vs Dynamic Data
- **Static:** status and version (hardcoded)
- **Dynamic:** timestamp (generated on render)

### No External Dependencies
- No API calls
- No external data sources
- Pure client-side rendering

## Edge Cases

### Timezone Handling
- Timestamp always in UTC (ISO format)
- No timezone conversion
- Consistent across all users

### Version Management
- Version is hardcoded string
- Not automatically synced with package.json
- Manual update required

### Status Values
- Currently only returns 'ok'
- No error states implemented
- No conditional logic

## Future Enhancements

### Potential Additions
- **Dynamic version** - Read from package.json or build metadata
- **Health checks** - Actual health verification logic
- **Status codes** - Different statuses (ok, warning, error)
- **System info** - Browser, OS, screen size
- **Performance metrics** - Load time, memory usage
- **API health** - Check external dependencies
- **Build info** - Git commit, build date, environment
- **Refresh button** - Manual timestamp refresh
- **Auto-refresh** - Periodic automatic updates
- **JSON export** - Download health data as JSON

### API Endpoint Pattern
Could be extended to match typical health check APIs:
```json
{
  "status": "ok",
  "version": "0.1.0",
  "timestamp": "2024-01-15T10:30:45.123Z",
  "uptime": 12345,
  "checks": {
    "database": "ok",
    "cache": "ok",
    "storage": "ok"
  }
}
```

The Health Check page provides a simple but useful status display that can be extended for more sophisticated monitoring needs.
