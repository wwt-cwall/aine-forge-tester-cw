// Changed by Forge v0.1.0
/**
 * Left-pads the input string with spaces to a width of 5.
 * 
 * If the input is already 5 characters or longer, returns it unchanged.
 * Otherwise, pads with spaces on the left to reach a total width of 5.
 * 
 * @param input - The string to pad
 * @returns The left-padded string with a minimum width of 5
 */
export function padLeft5(input: string): string {
  return input.padStart(5, ' ');
}
