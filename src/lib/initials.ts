// Changed by Forge v0.1.0
export function initials(name: string): string {
  return name.split(' ').filter(w => w).map(w => w[0].toUpperCase()).join('');
}
