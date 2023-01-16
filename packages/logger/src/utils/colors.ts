import chalkPipe from 'chalk-pipe';

/**
 *
 */
export type HexColorString = `#${string}`;

/**
 * See https://htmlcolorcodes.com/color-names/
 */
export const hexColors = {
	crimson: '#DC143C',
	darkKhaki: '#BDB76B',
	royalBlue: '#4169E1'
};

/**
 * @description
 * @param {string} text
 * @param {string} hexColor
 * @returns {string}
 */
export function addColor(text: string, hexColor: string): string {
	return chalkPipe(hexColor)(text);
}
