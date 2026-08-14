// Changed by Forge v0.1.0
/**
 * Returns the first element of an array.
 * 
 * Returns the first element if the array is not empty.
 * Returns undefined if the array is empty.
 * 
 * @param array - The array to get the first element from
 * @returns The first element of the array, or undefined if empty
 */
export function first<T>(array: T[]): T | undefined {
  return array[0];
}
