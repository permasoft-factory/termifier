import stripAinsi from 'strip-ansi';

import { isNegative } from './';

import type { WriteStream } from 'node:tty';

/**
 * @description Content to center in the writable side of a TTY
 * @param {string} message Message to center
 * @param {WriteStream} stdout? Writable side of a TTY
 * @returns {string} The centered message if possible
 * @exemple
 * ```typescript
 * import { centerContent } from '@termifier/utilities';
 *
 * console.log('Hello world  !');
 *
 * // > output
 * // ╭────────────────────────╮
 * // │                        │
 * // │ Hello world  !         │
 * // │                        │
 * // ╰────────────────────────╯
 *
 * console.log(centerContent('Hello world  !'));
 *
 * // > output
 * // ╭────────────────────────╮
 * // │                        │
 * // │     Hello world  !     │
 * // │                        │
 * // ╰────────────────────────╯
 * ```
 */
export function centerContent(message: string, stdout: WriteStream = process.stdout): string {
	const consoleColumns: number = stdout.columns;
	const messageLength: number = stripAinsi(message).length;

	const centerLength = consoleColumns / 2 - messageLength / 2;
	const padding = ' '.repeat(centerLength);

	return isNegative(centerLength) ? message : padding + message;
}
