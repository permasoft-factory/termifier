import { clearTerminal as clearString } from 'ansi-escapes';

/**
 * @description Clear the terminal
 * @returns {void}
 */
export function clearTerminal(): void {
	console.log(clearString);
}

/**
 * @author daguej
 * @description
 * What happens when you set process.title differs by platform. On *nix, it changes the process name in the process table,
 * which is not really desireable for us. On Windows, you can't change the name of a running process, so libuv just calls SetConsoleTitle.
 * So for our purposes, setting process.title is fine on Windows. For everyone else, we'll write the ANSI OSC escape code for the terminal
 * emulator to handle. (ANSI escapes are parsed and discarded by libuv on Windows)
 * See also: https://github.com/daguej/node-windows-console-title/issues/1`
 *
 * @see https://github.com/daguej/node-console-title
 * @param {string} title New title to rename the terminal
 * @returns {void}
 */
export function setTerminalTitle(title: string): void {
	if (process.platform == 'win32') {
		process.title = title;
	} else {
		process.stdout.write('\x1b]2;' + title + '\x1b\x5c');
	}
}
