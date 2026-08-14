// Changed by Forge v0.1.0
/**
 * Constrains a number to a maximum of 10.
 * 
 * Returns the input value if it is 10 or less.
 * If the value is greater than 10, returns 10.
 * 
 * @param n - The number to clamp
 * @returns The clamped value (at most 10)
 */
export function clampTo10(n: number): number {
  return Math.min(10, n);
}
