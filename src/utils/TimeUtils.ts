/**
 * Time utility functions
 * Extracted from index.js:13-20
 */

/**
 * Get current time formatted as HH:MM:SS
 * Used for logging timestamps throughout the application
 */
export function getTime(): string {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const result = `${hours}:${minutes}:${seconds}`;
  return result;
}

/**
 * Async delay function to replace system-sleep
 * Non-blocking alternative to sleep() that doesn't block the event loop
 *
 * @param ms - Milliseconds to delay
 * @returns Promise that resolves after the specified delay
 *
 * Usage: await delay(1500) instead of sleep(1500)
 *
 * Replaces system-sleep calls at lines:
 * 349, 353, 355, 498, 500, 502, 647, 649, 651, 791, 793, 795,
 * 940, 942, 944, 1094, 1096, 1098, 1234, 1258, 1266
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
