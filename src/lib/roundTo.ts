// Changed by Forge v0.1.0
/**
 * Rounds a number to a specified number of decimal places.
 *
 * @param value - The number to round
 * @param decimals - The number of decimal places to round to (default: 0)
 * @returns The rounded number
 *
 * @example
 * roundTo(3.14159, 2) // returns 3.14
 * roundTo(10.5, 0) // returns 11
 * roundTo(1.234567, 3) // returns 1.235
 */
export function roundTo(value: number, decimals: number = 0): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}
