/**
 * Simple logging utility
 * Wraps console output with timestamps using getTime() format
 */

import { getTime } from './TimeUtils';

export class Logger {
  /**
   * Log an informational message
   * Format: [HH:MM:SS] message
   */
  static info(message: string): void {
    console.log(`[${getTime()}] ${message}`);
  }

  /**
   * Log an error message
   * Format: [HH:MM:SS] ERROR: message
   */
  static error(message: string, error?: Error | unknown): void {
    console.log(`[${getTime()}] ERROR: ${message}`);
    if (error) {
      console.log(error);
    }
  }

  /**
   * Log a warning message
   * Format: [HH:MM:SS] WARNING: message
   */
  static warn(message: string): void {
    console.log(`[${getTime()}] WARNING: ${message}`);
  }

  /**
   * Log a debug message
   * Format: [HH:MM:SS] DEBUG: message
   */
  static debug(message: string): void {
    console.log(`[${getTime()}] DEBUG: ${message}`);
  }

  /**
   * Log a trade-related message
   * Format: [HH:MM:SS] [Trade] message
   */
  static trade(message: string): void {
    console.log(`[${getTime()}] [Trade] ${message}`);
  }

  /**
   * Log an authentication-related message
   * Format: [HH:MM:SS] [Auth] message
   */
  static auth(message: string): void {
    console.log(`[${getTime()}] [Auth] ${message}`);
  }

  /**
   * Log a command execution
   * Format: [HH:MM:SS] [Command] message
   */
  static command(message: string): void {
    console.log(`[${getTime()}] [Command] ${message}`);
  }
}
