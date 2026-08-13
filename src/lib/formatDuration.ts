// Changed by Forge v0.1.0
/**
 * Converts seconds into a formatted duration string in m:ss format.
 * @param seconds - The number of seconds to format
 * @returns A string in the format "m:ss" (e.g., "1:05", "0:00", "60:00")
 */
export function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  
  // Pad seconds with leading zero if needed
  const paddedSeconds = remainingSeconds.toString().padStart(2, '0');
  
  return `${minutes}:${paddedSeconds}`;
}
