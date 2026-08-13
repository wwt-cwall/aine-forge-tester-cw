// Changed by Forge v0.1.0
import { describe, it, expect } from 'vitest'
import { formatDuration } from './formatDuration'

describe('formatDuration', () => {
  it('formats 0 seconds as 0:00', () => {
    expect(formatDuration(0)).toBe('0:00')
  })

  it('formats 65 seconds as 1:05', () => {
    expect(formatDuration(65)).toBe('1:05')
  })

  it('formats 3600 seconds as 60:00', () => {
    expect(formatDuration(3600)).toBe('60:00')
  })
})
