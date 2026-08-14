// Changed by Forge v0.1.0
export function mean(values: number[]): number {
  return values.reduce((a, b) => a + b, 0) / values.length;
}
