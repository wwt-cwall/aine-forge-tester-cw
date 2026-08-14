// Changed by Forge v0.1.0
import { describe, it, expect } from 'vitest';
import { wordCount } from './wordCount';

describe('wordCount', () => {
  it('counts words in a normal sentence', () => {
    expect(wordCount("hello big world")).toBe(3);
  });

  it('handles padded whitespace', () => {
    expect(wordCount("  padded  words  ")).toBe(2);
  });

  it('returns 0 for empty string', () => {
    expect(wordCount("")).toBe(0);
  });

  it('returns 0 for whitespace-only string', () => {
    expect(wordCount("   ")).toBe(0);
  });
});
