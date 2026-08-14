// Changed by Forge v0.1.0
import { describe, it, expect } from 'vitest'
import { parseAge } from './parseAge'

describe('parseAge', () => {
  it('returns 0 for non-numeric input', () => {
    expect(parseAge('abc')).toBe(0)
  })
})
