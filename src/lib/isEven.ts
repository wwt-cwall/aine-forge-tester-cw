// Changed by Forge v0.1.0
/**
 * Determines whether a number is even.
 *
 * @param value - The number to check
 * @returns `true` if the number is even, `false` otherwise
 *
 * @example
 * isEven(4) // returns true
 * isEven(7) // returns false
 * isEven(0) // returns true
 * isEven(-2) // returns true
 */
function isEven(value: number): boolean {
  return value % 2 === 0
}

export default isEven
