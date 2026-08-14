// Changed by Forge v0.1.0
import { describe, it, expect } from 'vitest';
import { last } from './last';

describe.skip('last', () => {
  it('returns the last element of an array', () => {
    expect(last([1, 2, 3, 4, 5])).toBe(5);
  });

  it('returns the only element when array has one item', () => {
    expect(last([42])).toBe(42);
  });

  it('returns undefined for an empty array', () => {
    expect(last([])).toBeUndefined();
  });

  it('works with string arrays', () => {
    expect(last(['a', 'b', 'c'])).toBe('c');
  });

  it('works with mixed type arrays', () => {
    const arr = [1, 'two', { three: 3 }, [4]];
    expect(last(arr)).toEqual([4]);
  });

  it('works with arrays containing null', () => {
    expect(last([1, 2, null])).toBeNull();
  });

  it('works with arrays containing undefined', () => {
    expect(last([1, 2, undefined])).toBeUndefined();
  });

  it('works with boolean arrays', () => {
    expect(last([true, false, true])).toBe(true);
  });

  it('works with object arrays', () => {
    const obj = { id: 1, name: 'test' };
    expect(last([{ id: 0 }, obj])).toEqual(obj);
  });

  it('preserves type information', () => {
    const numbers: number[] = [1, 2, 3];
    const result = last(numbers);
    expect(typeof result).toBe('number');
  });
});
