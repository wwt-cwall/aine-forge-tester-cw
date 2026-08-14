// Changed by Forge v0.1.0
import { describe, it, expect } from 'vitest';
import { first } from './first';

describe('first', () => {
  it('returns the first element of an array', () => {
    expect(first([1, 2, 3])).toBe(1);
  });

  it('returns the first element of a single-element array', () => {
    expect(first([42])).toBe(42);
  });

  it('returns undefined for an empty array', () => {
    expect(first([])).toBeUndefined();
  });

  it('works with string arrays', () => {
    expect(first(['a', 'b', 'c'])).toBe('a');
  });

  it('works with object arrays', () => {
    const obj = { id: 1, name: 'test' };
    expect(first([obj, { id: 2, name: 'other' }])).toBe(obj);
  });

  it('works with mixed type arrays', () => {
    const arr = [null, 'string', 42];
    expect(first(arr)).toBe(null);
  });

  it('returns first element even if it is falsy', () => {
    expect(first([0, 1, 2])).toBe(0);
  });

  it('returns first element even if it is false', () => {
    expect(first([false, true])).toBe(false);
  });

  it('returns first element even if it is empty string', () => {
    expect(first(['', 'a', 'b'])).toBe('');
  });

  it('works with nested arrays', () => {
    const nested = [[1, 2], [3, 4]];
    expect(first(nested)).toEqual([1, 2]);
  });
});
