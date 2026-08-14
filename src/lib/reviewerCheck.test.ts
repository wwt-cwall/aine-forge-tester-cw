// Changed by Forge v0.1.0
import { describe, it, expect } from 'vitest';
import { isValidReviewer } from './reviewerCheck';

describe('isValidReviewer', () => {
  it('returns true for valid reviewer names', () => {
    expect(isValidReviewer('john-doe')).toBe(true);
    expect(isValidReviewer('reviewer_1')).toBe(true);
    expect(isValidReviewer('Alice')).toBe(true);
  });

  it('returns false for empty string', () => {
    expect(isValidReviewer('')).toBe(false);
  });

  it('returns false for whitespace-only string', () => {
    expect(isValidReviewer('   ')).toBe(false);
  });

  it('returns false for single character', () => {
    expect(isValidReviewer('a')).toBe(false);
  });

  it('returns false for names longer than 50 characters', () => {
    expect(isValidReviewer('a'.repeat(51))).toBe(false);
  });

  it('returns false for names with special characters', () => {
    expect(isValidReviewer('john@doe')).toBe(false);
    expect(isValidReviewer('reviewer!')).toBe(false);
    expect(isValidReviewer('name#123')).toBe(false);
  });

  it('returns false for names with spaces', () => {
    expect(isValidReviewer('john doe')).toBe(false);
  });

  it('returns false for non-string input', () => {
    expect(isValidReviewer(null as unknown as string)).toBe(false);
    expect(isValidReviewer(undefined as unknown as string)).toBe(false);
    expect(isValidReviewer(123 as unknown as string)).toBe(false);
  });

  it('accepts valid names with hyphens and underscores', () => {
    expect(isValidReviewer('john-doe_123')).toBe(true);
    expect(isValidReviewer('_reviewer')).toBe(true);
    expect(isValidReviewer('reviewer-')).toBe(true);
  });

  it('accepts exactly 2 character names', () => {
    expect(isValidReviewer('ab')).toBe(true);
  });

  it('accepts exactly 50 character names', () => {
    expect(isValidReviewer('a'.repeat(50))).toBe(true);
  });
});
