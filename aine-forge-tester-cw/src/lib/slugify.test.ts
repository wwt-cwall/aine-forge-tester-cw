// Changed by Forge v0.1.0
import { describe, it, expect } from 'vitest'
import { slugify } from './slugify'

describe('slugify', () => {
  it('converts basic text to lowercase with hyphens', () => {
    expect(slugify('Hello, World!')).toBe('hello-world')
  })

  it('handles multiple spaces', () => {
    expect(slugify('Hello   World')).toBe('hello-world')
  })

  it('removes leading and trailing hyphens', () => {
    expect(slugify('---hello-world---')).toBe('hello-world')
  })

  it('collapses multiple hyphens into one', () => {
    expect(slugify('hello---world')).toBe('hello-world')
  })

  it('handles special characters', () => {
    expect(slugify('Hello@#$%World')).toBe('hello-world')
  })

  it('trims whitespace from start and end', () => {
    expect(slugify('  hello world  ')).toBe('hello-world')
  })

  it('handles mixed case and punctuation', () => {
    expect(slugify('The Quick Brown Fox!')).toBe('the-quick-brown-fox')
  })

  it('handles numbers correctly', () => {
    expect(slugify('Hello 123 World')).toBe('hello-123-world')
  })

  it('handles empty string', () => {
    expect(slugify('')).toBe('')
  })

  it('handles only special characters', () => {
    expect(slugify('!@#$%^&*()')).toBe('')
  })
})
