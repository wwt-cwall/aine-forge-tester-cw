// Changed by Forge v0.1.0
/**
 * Converts a string to a URL-friendly slug.
 * 
 * - Lowercases the input
 * - Trims whitespace
 * - Replaces runs of non-alphanumeric characters with a single hyphen
 * - Strips leading and trailing hyphens
 * - Collapses repeated hyphens
 * 
 * @param input - The string to slugify
 * @returns The slugified string
 */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
