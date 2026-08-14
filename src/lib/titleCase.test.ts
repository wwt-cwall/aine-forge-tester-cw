// Changed by Forge v0.1.0
import { describe, it, expect } from 'vitest';
import { titleCase } from './titleCase';

describe('titleCase', () => {
  it('capitalizes first letter of single word', () => {
    expect(titleCase('hello')).toBe('Hello');
  });

  it('capitalizes first letter of each word', () => {
    expect(titleCase('hello world')).toBe('Hello World');
  });

  it('converts uppercase to title case', () => {
    expect(titleCase('HELLO WORLD')).toBe('Hello World');
  });

  it('handles mixed case input', () => {
    expect(titleCase('hELLO wORLD')).toBe('Hello World');
  });

  it('handles multiple spaces between words', () => {
    expect(titleCase('hello  world')).toBe('Hello  World');
  });

  it('handles leading spaces', () => {
    expect(titleCase(' hello world')).toBe(' Hello World');
  });

  it('handles trailing spaces', () => {
    expect(titleCase('hello world ')).toBe('Hello World ');
  });

  it('handles empty string', () => {
    expect(titleCase('')).toBe('');
  });

  it('handles single space', () => {
    expect(titleCase(' ')).toBe(' ');
  });

  it('handles string with only spaces', () => {
    expect(titleCase('   ')).toBe('   ');
  });

  it('handles complex real-world example', () => {
    expect(titleCase('the quick brown fox')).toBe('The Quick Brown Fox');
  });

  it('preserves numbers', () => {
    expect(titleCase('test 123 example')).toBe('Test 123 Example');
  });

  it('handles single character words', () => {
    expect(titleCase('a b c')).toBe('A B C');
  });

  it('handles words with numbers', () => {
    expect(titleCase('test123 example456')).toBe('Test123 Example456');
  });
});
