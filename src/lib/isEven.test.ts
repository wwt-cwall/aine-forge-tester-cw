// Changed by Forge v0.1.0
import { describe, it, expect } from 'vitest'
import isEven from './isEven'

describe('isEven', () => {
  it('returns true for even positive numbers', () => {
    expect(isEven(2)).toBe(true)
    expect(isEven(4)).toBe(true)
    expect(isEven(100)).toBe(true)
  })

  it('returns false for odd positive numbers', () => {
    expect(isEven(1)).toBe(false)
    expect(isEven(3)).toBe(false)
    expect(isEven(99)).toBe(false)
  })

  it('returns true for even negative numbers', () => {
    expect(isEven(-2)).toBe(true)
    expect(isEven(-4)).toBe(true)
    expect(isEven(-100)).toBe(true)
  })

  it('returns false for odd negative numbers', () => {
    expect(isEven(-1)).toBe(false)
    expect(isEven(-3)).toBe(false)
    expect(isEven(-99)).toBe(false)
  })

  it('returns true for zero', () => {
    expect(isEven(0)).toBe(true)
  })
})
