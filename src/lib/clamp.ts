// Changed by Forge v0.1.0
/**
 * Constrains a number between a minimum and maximum value.
 * 
 * Returns the input value if it falls within the range [min, max].
 * If the value is less than min, returns min.
 * If the value is greater than max, returns max.
 * 
 * @param value - The number to clamp
 * @param min - The minimum allowed value
 * @param max - The maximum allowed value
 * @returns The clamped value
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}
