// Changed by Forge v0.1.0
import { describe, it, expect } from 'vitest';
import { mean } from './mean';

describe('mean', () => {
  it('returns 2 for mean([1, 2, 3])', () => {
    expect(mean([1, 2, 3])).toBe(2);
  });

  it('returns 0 for mean([])', () => {
    expect(mean([])).toBe(0);
  });
});
