// Changed by Forge v0.1.0
/**
 * Converts a string to title case.
 * 
 * Capitalizes the first letter of each word while converting
 * the rest to lowercase. Words are identified by spaces.
 * 
 * @param text - The string to convert to title case
 * @returns The title-cased string
 */
export function titleCase(text: string): string {
  return text
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
