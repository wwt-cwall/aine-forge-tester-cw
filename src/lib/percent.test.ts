// Changed by Forge v0.1.0
import { describe, it, expect } from 'vitest'
import { percent } from './percent'

describe('percent', () => {
  it('returns correct percentage rounded to one decimal place', () => {
    expect(percent(25, 200)).toBe(12.5)
  })

  it('returns 0 when total is 0 instead of Infinity or NaN', () => {
    expect(percent(1, 0)).toBe(0)
  })
})
