// Changed by Forge v0.1.0
/**
 * Validates if a reviewer name meets the required criteria.
 * 
 * A valid reviewer name must:
 * - Be a non-empty string
 * - Contain only alphanumeric characters, hyphens, and underscores
 * - Be between 2 and 50 characters long
 * 
 * @param name - The reviewer name to validate
 * @returns true if the name is valid, false otherwise
 */
export function isValidReviewer(name: string): boolean {
  if (!name || typeof name !== 'string') {
    return false;
  }

  const trimmed = name.trim();
  
  if (trimmed.length < 2 || trimmed.length > 50) {
    return false;
  }

  return /^[a-zA-Z0-9_-]+$/.test(trimmed);
}
