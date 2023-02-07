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
 * // > output
 * // ╭────────────────────────╮
 * // │                        │
 * // │ Hello world  !         │
 * // │                        │
 * // ╰────────────────────────╯
 *
 * console.log(centerContent('Hello world  !'));
 * // > output
 * // ╭────────────────────────╮
 * // │                        │
 * // │     Hello world  !     │
 * // │                        │
 * // ╰────────────────────────╯
 * ```
 *
 * console.log('Hello world  !\nFrom NodeJs');
 * // > output
 * // ╭────────────────────────╮
 * // │                        │
 * // │ Hello world  !         │
 * // │ From NodeJs            │
 * // │                        │
 * // ╰────────────────────────╯
 *
 * console.log(centerContent('Hello world  !\nFrom NodeJs'));
 * // > output
 * // ╭────────────────────────╮
 * // │                        │
 * // │     Hello world  !     │
 * // │      From NodeJs       │
 * // │                        │
 * // ╰────────────────────────╯
 * ```
 */
export function centerContent(message: string, stdout: WriteStream = process.stdout): string {
	const splittedMessage: string[] = message.split('\n');
	const consoleColumns: number = stdout.columns;

	const centeredLines: string[] = [];

	splittedMessage.forEach((line) => {
		const lineLength: number = stripAinsi(line).length;

		const centerLength = consoleColumns / 2 - lineLength / 2;
		const padding = ' '.repeat(centerLength);

		centeredLines.push(isNegative(centerLength) ? line : padding + line);
	});

	return centeredLines.join('\n');
}
