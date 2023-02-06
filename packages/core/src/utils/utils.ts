import { clearTerminal as clearString } from 'ansi-escapes';

/**
 * @description
 * @returns {void}
 */
export function clearTerminal(): void {
	console.log(clearString);
}
