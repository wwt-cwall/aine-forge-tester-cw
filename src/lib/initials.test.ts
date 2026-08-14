// Changed by Forge v0.1.0
import { describe, it, expect } from 'vitest';
import { initials } from './initials';

describe('initials', () => {
  it('returns initials for "ada lovelace"', () => {
    expect(initials('ada lovelace')).toBe('AL');
  });

  it('returns empty string for empty input', () => {
    expect(initials('')).toBe('');
  });

  it('returns initials for "  ada  lovelace " with extra spaces', () => {
    expect(initials('  ada  lovelace ')).toBe('AL');
  });
});
