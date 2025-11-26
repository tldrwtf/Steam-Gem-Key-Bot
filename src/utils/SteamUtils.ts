/**
 * Steam utility functions
 * Extracted from index.js:9
 */

/**
 * Regular expression for validating SteamID64 format
 * SteamID64 is a 17-digit number
 */
export const SID64REGEX = /^[0-9]{17}$/;

/**
 * Validate if a string is a valid SteamID64
 *
 * @param steamId - The Steam ID to validate
 * @returns true if valid SteamID64 format, false otherwise
 */
export function isValidSteamID64(steamId: string): boolean {
  return SID64REGEX.test(steamId);
}

/**
 * Type guard to check if a value is a valid SteamID64 string
 *
 * @param value - Value to check
 * @returns true if value is a string matching SteamID64 format
 */
export function isSteamID64(value: unknown): value is string {
  return typeof value === 'string' && isValidSteamID64(value);
}
