// Changed by Forge v0.1.0
import { describe, it, expect } from 'vitest';
import { roundTo } from './roundTo';

describe('roundTo', () => {
  it('rounds to the nearest integer when decimals is 0', () => {
    expect(roundTo(3.4)).toBe(3);
    expect(roundTo(3.5)).toBe(4);
    expect(roundTo(10.5)).toBe(11);
  });

  it('rounds to specified decimal places', () => {
    expect(roundTo(3.14159, 2)).toBe(3.14);
    expect(roundTo(1.234567, 3)).toBe(1.235);
    expect(roundTo(9.9999, 2)).toBe(10);
  });

  it('handles negative numbers', () => {
    expect(roundTo(-3.14159, 2)).toBe(-3.14);
    expect(roundTo(-10.5, 0)).toBe(-10);
  });

  it('handles zero', () => {
    expect(roundTo(0, 2)).toBe(0);
    expect(roundTo(0.001, 2)).toBe(0);
  });

  it('handles large decimal places', () => {
    expect(roundTo(1.23456789, 5)).toBe(1.23457);
    expect(roundTo(0.123456789, 8)).toBe(0.12345679);
  });
});
