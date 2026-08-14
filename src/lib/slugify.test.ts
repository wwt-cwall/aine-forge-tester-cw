// Changed by Forge v0.1.0
import { describe, it, expect } from 'vitest';
import { slugify } from './slugify';

describe('slugify', () => {
  it('converts text to lowercase', () => {
    expect(slugify('HELLO WORLD')).toBe('hello-world');
  });

  it('replaces spaces with hyphens', () => {
    expect(slugify('hello world')).toBe('hello-world');
  });

  it('replaces underscores with hyphens', () => {
    expect(slugify('hello_world')).toBe('hello-world');
  });

  it('removes special characters', () => {
    expect(slugify('hello@world!')).toBe('helloworld');
  });

  it('collapses consecutive hyphens', () => {
    expect(slugify('hello---world')).toBe('hello-world');
  });

  it('trims leading and trailing hyphens', () => {
    expect(slugify('-hello-world-')).toBe('hello-world');
  });

  it('handles mixed spaces and underscores', () => {
    expect(slugify('hello world_test')).toBe('hello-world-test');
  });

  it('handles empty string', () => {
    expect(slugify('')).toBe('');
  });

  it('handles string with only special characters', () => {
    expect(slugify('!@#$%')).toBe('');
  });

  it('handles string with only spaces', () => {
    expect(slugify('   ')).toBe('');
  });

  it('handles complex real-world example', () => {
    expect(slugify('The Quick Brown Fox!')).toBe('the-quick-brown-fox');
  });

  it('preserves numbers', () => {
    expect(slugify('test123 example456')).toBe('test123-example456');
  });
});
