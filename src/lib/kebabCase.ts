// Changed by Forge v0.1.0
/**
 * Converts a string to kebab-case.
 * 
 * Transforms the input by:
 * - Converting to lowercase
 * - Replacing spaces with hyphens
 * 
 * @param input - The string to convert to kebab-case
 * @returns The kebab-cased string
 */
export function kebabCase(input: string): string {
  return input.toLowerCase().replace(/\s+/g, '-');
}
