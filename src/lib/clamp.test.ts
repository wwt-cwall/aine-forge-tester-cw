// Changed by Forge v0.1.0
import { describe, it, expect } from 'vitest';
import { clamp } from './clamp';

describe('clamp', () => {
  it('returns value when within range', () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it('returns min when value is below range', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  it('returns max when value is above range', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  it('returns min when value equals min', () => {
    expect(clamp(0, 0, 10)).toBe(0);
  });

  it('returns max when value equals max', () => {
    expect(clamp(10, 0, 10)).toBe(10);
  });

  it('handles negative ranges', () => {
    expect(clamp(-5, -10, -1)).toBe(-5);
  });

  it('clamps negative value to negative range', () => {
    expect(clamp(-15, -10, -1)).toBe(-10);
  });

  it('clamps positive value to negative range', () => {
    expect(clamp(5, -10, -1)).toBe(-1);
  });

  it('handles zero in range', () => {
    expect(clamp(0, -5, 5)).toBe(0);
  });

  it('handles decimal values', () => {
    expect(clamp(2.5, 0, 5)).toBe(2.5);
  });

  it('clamps decimal value below range', () => {
    expect(clamp(0.5, 1, 5)).toBe(1);
  });

  it('clamps decimal value above range', () => {
    expect(clamp(5.5, 1, 5)).toBe(5);
  });

  it('handles very large numbers', () => {
    expect(clamp(1000000, 0, 100)).toBe(100);
  });

  it('handles very small numbers', () => {
    expect(clamp(-1000000, -100, 0)).toBe(-100);
  });
});
