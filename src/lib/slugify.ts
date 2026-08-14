// Changed by Forge v0.1.0
/**
 * Converts a string into a URL-friendly slug.
 * 
 * Transforms the input by:
 * - Converting to lowercase
 * - Replacing spaces and underscores with hyphens
 * - Removing all non-alphanumeric characters except hyphens
 * - Collapsing consecutive hyphens into a single hyphen
 * - Trimming leading and trailing hyphens
 * 
 * @param text - The string to convert to a slug
 * @returns A URL-friendly slug string
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}
