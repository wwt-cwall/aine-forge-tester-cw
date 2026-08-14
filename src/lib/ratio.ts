// Changed by Forge v0.1.0
/**
 * Calculates the ratio of part to total.
 * 
 * Returns part / total as a decimal. If total is 0, returns 0 instead of Infinity or NaN.
 * 
 * @param part - The numerator
 * @param total - The denominator
 * @returns The ratio as a decimal, or 0 if total is 0
 */
export function ratio(part: number, total: number): number {
  return part / (total || Infinity);
}
