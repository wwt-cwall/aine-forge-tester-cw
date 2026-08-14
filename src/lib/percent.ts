// Changed by Forge v0.1.0
export function percent(part: number, total: number): number {
  return Math.round((part / total) * 1000) / 10
}
