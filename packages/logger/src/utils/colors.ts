import chalkPipe from 'chalk-pipe';

import type { Chalk, ColorSupport } from 'chalk';

/**
 * HEX color
 */
export type HexColorString = `#${string}` | string;

/**
 * A Chalk instance
 */
export type ChalkInstance = Chalk & { supportsColor: ColorSupport };

/**
 * See https://htmlcolorcodes.com/color-names/
 */
export const hexColors = {
	crimson: '#DC143C',
	darkOrange: '#FF8C00',
	darkKhaki: '#BDB76B',
	royalBlue: '#4169E1',
	slateBlue: '#6A5ACD',
	thistle: '#D8BFD8'
};

/**
 * @description Pipe color or style to a text
 * @param {HexColorString} style? HEX color or style. Use a dot `.` to separate multiple styles.
 * @param {ChalkInstance} customChalk? A custom Chalk instance
 * @returns {ChalkInstance} A Chalk instance
 * @example
 * ```typescript
 * import { pipeColor } from '@termifier/logger';
 *
 * const blue = pipeColor('blue.bold');
 * console.log(blue('Hello world !'));
 * ```
 */
export function pipeColor(style: HexColorString, customChalk?: ChalkInstance | undefined): ChalkInstance {
	return chalkPipe(style, customChalk);
}

/**
 * @description Add color or style to a text
 * @param {string} text Text to stylisize
 * @param {HexColorString | undefined} style? HEX color or style. Use a dot `.` to separate multiple styles.
 * @param {ChalkInstance | undefined} customChalk? A custom Chalk instance
 * @returns {string} Stylized text
 * @example
 * ```typescript
 * import { addColor } from '@termifier/logger';
 *
 * console.log(addColor('Hello world !', 'blue.bold'));
 * ```
 */
export function addColor(text: string, style?: HexColorString | undefined, customChalk?: ChalkInstance | undefined): string {
	if (style !== 'string') return text;

	return chalkPipe(style, customChalk)(text);
}
