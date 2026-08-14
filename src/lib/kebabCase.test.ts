// Changed by Forge v0.1.0
import { describe, it, expect } from 'vitest';
import { kebabCase } from './kebabCase';

describe('kebabCase', () => {
  it('converts Hello World to hello-world', () => {
    expect(kebabCase('Hello World')).toBe('hello-world');
  });
});
