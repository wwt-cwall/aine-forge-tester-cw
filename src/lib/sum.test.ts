// Changed by Forge v0.1.0
import { describe, it, expect } from 'vitest'
import { sum } from './sum'

describe('sum', () => {
  it('adds two numbers', () => {
    expect(sum(2, 2)).toBe(4)
  })
})
