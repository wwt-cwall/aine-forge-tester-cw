// Changed by Forge v0.1.0
import { describe, it, expect } from 'vitest'
import { isReadyToMerge } from './mainMergeCheck'

describe('mainMergeCheck', () => {
  describe('isReadyToMerge', () => {
    it('returns true for valid feature branch names', () => {
      expect(isReadyToMerge('feature/new-component')).toBe(true)
      expect(isReadyToMerge('feature/add-tests')).toBe(true)
    })

    it('returns true for valid bugfix branch names', () => {
      expect(isReadyToMerge('bugfix/fix-crash')).toBe(true)
      expect(isReadyToMerge('bugfix/memory-leak')).toBe(true)
    })

    it('returns true for other valid branch types', () => {
      expect(isReadyToMerge('hotfix/security-patch')).toBe(true)
      expect(isReadyToMerge('chore/update-deps')).toBe(true)
      expect(isReadyToMerge('docs/readme-update')).toBe(true)
      expect(isReadyToMerge('refactor/simplify-logic')).toBe(true)
    })

    it('returns false for empty or whitespace-only branch names', () => {
      expect(isReadyToMerge('')).toBe(false)
      expect(isReadyToMerge('   ')).toBe(false)
    })

    it('returns false when branch name is "main"', () => {
      expect(isReadyToMerge('main')).toBe(false)
    })

    it('returns false for branches without proper naming convention', () => {
      expect(isReadyToMerge('random-branch')).toBe(false)
      expect(isReadyToMerge('develop')).toBe(false)
      expect(isReadyToMerge('feature_new-component')).toBe(false)
    })

    it('returns false for invalid branch type prefixes', () => {
      expect(isReadyToMerge('invalid/branch-name')).toBe(false)
      expect(isReadyToMerge('test/something')).toBe(false)
    })
  })
})
