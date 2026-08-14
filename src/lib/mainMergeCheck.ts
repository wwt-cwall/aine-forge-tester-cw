// Changed by Forge v0.1.0
/**
 * Checks if a branch is ready to merge into main
 * @param branchName - The name of the branch to check
 * @returns true if the branch is ready to merge, false otherwise
 */
export function isReadyToMerge(branchName: string): boolean {
  if (!branchName || branchName.trim().length === 0) {
    return false
  }

  // Branch should not be 'main' itself
  if (branchName === 'main') {
    return false
  }

  // Branch name should follow conventional naming patterns
  const validPattern = /^(feature|bugfix|hotfix|chore|docs|refactor)\/[\w-]+$/
  return validPattern.test(branchName)
}
