// Changed by Forge v0.1.0
import { describe, it, expect } from 'vitest';
import { padLeft5 } from './padLeft5';

describe('padLeft5', () => {
  it("pads 'ab' to '   ab'", () => {
    expect(padLeft5('ab')).toBe('   ab');
  });

  it('returns unchanged string when already 5 characters or longer', () => {
    expect(padLeft5('hello')).toBe('hello');
  });
});
