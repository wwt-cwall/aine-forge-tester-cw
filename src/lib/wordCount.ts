// Changed by Forge v0.1.0
/**
 * Counts the number of whitespace-separated words in a string.
 * 
 * Returns the count of words separated by whitespace.
 * An empty or whitespace-only string returns 0.
 * 
 * @param input - The string to count words in
 * @returns The number of words in the string
 */
export function wordCount(input: string): number {
  return input.trim().split(/\s+/).filter(word => word.length > 0).length;
}
