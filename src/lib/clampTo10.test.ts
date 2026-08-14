// Changed by Forge v0.1.0
import { describe, it, expect } from 'vitest';
import { clampTo10 } from './clampTo10';

describe('clampTo10', () => {
  it('returns 10 when value is greater than 10', () => {
    expect(clampTo10(42)).toBe(10);
  });

  it('returns the value when it is 10 or less', () => {
    expect(clampTo10(3)).toBe(3);
  });
});
