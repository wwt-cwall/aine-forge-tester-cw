// Changed by Forge v0.1.0
/**
 * Returns the last element of an array.
 * 
 * Returns undefined if the array is empty.
 * 
 * @param array - The array to get the last element from
 * @returns The last element of the array, or undefined if empty
 */
export function last<T>(array: T[]): T | undefined {
  return array[array.length - 1];
}
