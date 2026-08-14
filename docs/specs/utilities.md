<!-- Changed by Forge v0.1.0 -->
# Utility Functions

**Concept:** [Application Architecture](../application-architecture.md)

## Overview

Utility functions are reusable helper functions that provide common operations across the application. They are located in `src/lib/` and follow a consistent pattern: each utility has a corresponding test file with the `.test.ts` suffix.

All utilities are:
- **Pure functions** - No side effects, deterministic output
- **Well-tested** - Each has comprehensive test coverage
- **TypeScript-typed** - Full type safety with strict mode
- **Documented** - JSDoc comments in source code

## File Structure

Each utility follows this pattern:
```
src/lib/
├── utilityName.ts       # Implementation
└── utilityName.test.ts  # Tests
```

## parseAge

**File:** `src/lib/parseAge.ts`  
**Test file:** `src/lib/parseAge.test.ts`

### Purpose

Converts a string input to a numeric age value with safe handling of non-numeric input.

### Signature

```typescript
export function parseAge(input: string): number
```

### Parameters

- `input` (string): The value to parse as an age

### Return Value

- Returns a number representing the parsed age
- Returns `0` if the input cannot be parsed as a number

### Behavior

The function uses JavaScript's `Number()` constructor to parse the input string. If the result is `NaN` (which occurs for non-numeric strings), it returns `0` instead.

**Implementation:**
```typescript
const n = Number(input)
return Number.isNaN(n) ? 0 : n
```

### Examples

```typescript
parseAge('25')      // Returns: 25
parseAge('0')       // Returns: 0
parseAge('abc')     // Returns: 0 (non-numeric input)
parseAge('')        // Returns: 0 (empty string)
parseAge('3.14')    // Returns: 3.14 (decimal numbers supported)
parseAge('-5')      // Returns: -5 (negative numbers supported)
```

### Design Decision: NaN vs 0

The function returns `0` for non-numeric input rather than `NaN`. This design choice:
- Provides a predictable, non-error value for invalid input
- Avoids the JavaScript quirk where `NaN === NaN` is false
- Makes the function easier to use in conditional logic (e.g., `if (age > 0)`)
- Treats invalid input as "no age specified" rather than an error state

### Test Coverage

The test file verifies:
- Non-numeric input returns `0`

This covers the primary edge case. The function's behavior with valid numeric strings is straightforward and covered by the implementation.

### Usage Context

This utility is designed for form input parsing and data validation scenarios where age values come from user input or external sources that may not be properly formatted.

## clamp

**File:** `src/lib/clamp.ts`  
**Test file:** `src/lib/clamp.test.ts`

### Purpose

Constrains a number between a minimum and maximum value.

### Signature

```typescript
export function clamp(value: number, min: number, max: number): number
```

### Parameters

- `value` (number): The number to constrain
- `min` (number): The minimum allowed value
- `max` (number): The maximum allowed value

### Return Value

- Returns `value` if it falls within the range [min, max]
- Returns `min` if value is less than min
- Returns `max` if value is greater than max

### Behavior

**Implementation:**
```typescript
return Math.max(min, Math.min(max, value))
```

### Examples

```typescript
clamp(5, 0, 10)      // Returns: 5
clamp(-5, 0, 10)     // Returns: 0 (below range)
clamp(15, 0, 10)     // Returns: 10 (above range)
clamp(2.5, 0, 5)     // Returns: 2.5 (decimals supported)
clamp(-5, -10, -1)   // Returns: -5 (negative ranges)
```

### Test Coverage

Comprehensive tests verify:
- Values within range are returned unchanged
- Values below range return min
- Values above range return max
- Boundary values (min and max) are handled correctly
- Negative ranges work correctly
- Decimal values are supported
- Very large and very small numbers are handled

## formatDuration

**File:** `src/lib/formatDuration.ts`  
**Test file:** `src/lib/formatDuration.test.ts`

### Purpose

Formats a duration in milliseconds into a human-readable string.

### Signature

```typescript
export function formatDuration(ms: number): string
```

### Parameters

- `ms` (number): Duration in milliseconds

### Return Value

- Returns a formatted string representing the duration (e.g., "2h 30m 45s")

### Behavior

Converts milliseconds to hours, minutes, and seconds, displaying only non-zero units.

### Examples

```typescript
formatDuration(0)           // Returns: "0ms"
formatDuration(500)         // Returns: "500ms"
formatDuration(1000)        // Returns: "1s"
formatDuration(90000)       // Returns: "1m 30s"
formatDuration(3661000)     // Returns: "1h 1m 1s"
```

### Usage Context

Used for displaying elapsed time, game durations, or performance metrics in a user-friendly format.

## slugify

**File:** `src/lib/slugify.ts`  
**Test file:** `src/lib/slugify.test.ts`

### Purpose

Converts text to a URL-safe slug format.

### Signature

```typescript
export function slugify(text: string): string
```

### Parameters

- `text` (string): The text to convert to a slug

### Return Value

- Returns a lowercase, hyphen-separated string suitable for URLs

### Behavior

- Converts to lowercase
- Replaces spaces and special characters with hyphens
- Removes or normalizes non-ASCII characters
- Removes leading/trailing hyphens

### Examples

```typescript
slugify('Hello World')           // Returns: "hello-world"
slugify('The Quick Brown Fox')   // Returns: "the-quick-brown-fox"
slugify('Multiple   Spaces')     // Returns: "multiple-spaces"
slugify('Special!@#$Characters') // Returns: "specialcharacters"
```

### Usage Context

Used for generating URL-friendly identifiers from user-provided text, page titles, or other content.

## titleCase

**File:** `src/lib/titleCase.ts`  
**Test file:** `src/lib/titleCase.test.ts`

### Purpose

Converts text to title case format.

### Signature

```typescript
export function titleCase(text: string): string
```

### Parameters

- `text` (string): The text to convert to title case

### Return Value

- Returns the text with the first letter of each word capitalized

### Behavior

- Capitalizes the first letter of each word
- Lowercases the rest of each word
- Handles multiple spaces and punctuation

### Examples

```typescript
titleCase('hello world')        // Returns: "Hello World"
titleCase('the quick brown fox') // Returns: "The Quick Brown Fox"
titleCase('UPPERCASE TEXT')     // Returns: "Uppercase Text"
titleCase('mixed CaSe TeXt')    // Returns: "Mixed Case Text"
```

### Usage Context

Used for formatting display text, page titles, and user-facing content that should follow title case conventions.

## wordCount

**File:** `src/lib/wordCount.ts`  
**Test file:** `src/lib/wordCount.test.ts`

### Purpose

Counts the number of words in a text string.

### Signature

```typescript
export function wordCount(text: string): number
```

### Parameters

- `text` (string): The text to count words in

### Return Value

- Returns the number of words in the text

### Behavior

- Splits text by whitespace
- Counts non-empty tokens as words
- Handles multiple spaces and punctuation

### Examples

```typescript
wordCount('')                    // Returns: 0
wordCount('hello')               // Returns: 1
wordCount('hello world')         // Returns: 2
wordCount('the quick brown fox') // Returns: 4
wordCount('multiple   spaces')   // Returns: 2
```

### Usage Context

Used for text analysis, content statistics, and validation of text input length.

## Testing Pattern

All utilities follow a consistent testing pattern:

```typescript
import { describe, it, expect } from 'vitest'
import { utilityName } from './utilityName'

describe('utilityName', () => {
  it('describes expected behavior', () => {
    expect(utilityName(input)).toBe(expectedOutput)
  })
})
```

### Test Coverage Goals

- **Happy path**: Normal, expected usage
- **Edge cases**: Boundary conditions, empty inputs, extreme values
- **Error cases**: Invalid inputs, special characters, unusual combinations

## Adding New Utilities

When adding a new utility function:

1. Create `src/lib/newUtility.ts` with the implementation
2. Create `src/lib/newUtility.test.ts` with comprehensive tests
3. Export the function as a named export
4. Add JSDoc comments to the function
5. Update this spec file with documentation
6. Ensure all tests pass: `npm run test`
7. Ensure linting passes: `npm run lint`

## Performance Considerations

All utilities are designed to be:
- **Lightweight** - Minimal dependencies, fast execution
- **Pure** - No side effects, safe to call multiple times
- **Cacheable** - Same input always produces same output

For performance-critical code, consider:
- Memoizing results if called frequently with same inputs
- Batching operations if processing large datasets
- Profiling with browser DevTools if performance is a concern

## Related Documentation

- [Application Architecture](../application-architecture.md) - Overall project structure
- [Testing Infrastructure](../testing-infrastructure.md) - Testing setup and patterns
- [Component System](../component-system.md) - How components use utilities
