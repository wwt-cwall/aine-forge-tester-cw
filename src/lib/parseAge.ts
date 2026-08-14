// Changed by Forge v0.1.0
export function parseAge(input: string): number {
  const n = Number(input)
  return Number.isNaN(n) ? 0 : n
}
