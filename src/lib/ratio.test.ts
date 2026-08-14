// Changed by Forge v0.1.0
import { describe, it, expect } from 'vitest';
import { ratio } from './ratio';

describe('ratio', () => {
  it('returns 0.25 for ratio(1, 4)', () => {
    expect(ratio(1, 4)).toBe(0.25);
  });

  it('returns 0 for ratio(5, 0) instead of Infinity or NaN', () => {
    expect(ratio(5, 0)).toBe(0);
    expect(Number.isFinite(ratio(5, 0))).toBe(true);
  });
});
