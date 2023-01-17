import { addColor, hexColors } from './';
import { VError } from 'verror';

import type { HexColorString } from './';

/**
 * Different parameters of the message to be stylized
 */
export interface LoggerMessageOptions {
	dateColor?: HexColorString;
	labelColor: HexColorString;
}

/**
 *
 */
export class Logger {
	/**
	 *
	 */
	public constructor() {}

	/**
	 * @description
	 * @param {string} message
	 * @returns {void}
	 */
	public info(message: string): void {
		this.write('info', message, { labelColor: hexColors.royalBlue });
	}

	/**
	 * @description
	 * @param {string} message
	 * @param {...any[]} params
	 * @returns {void}
	 */
	public error(message: string, ...params: any[]): void {
		const error = new VError(message, ...params);
		this.write('error', error.message, { labelColor: hexColors.crimson });
	}

	/**
	 * @description
	 * @param {string} label
	 * @param {string} message
	 * @param {MessageOptions} options
	 * @returns {void}
	 */
	public write(label: string, message: string, options: LoggerMessageOptions): void {
		console.log(this.buildMessage(label, message, options).join(' '));
	}

	/**
	 * @description
	 * @param {string} label
	 * @param {string} message
	 * @param {LoggerMessageOptions} options
	 * @returns {string[]}
	 */
	public buildMessage(label: string, message: string, options: LoggerMessageOptions): string[] {
		return [this.addDate(undefined, options.dateColor), this.addLabel(label, options.labelColor), message];
	}

	/**
	 * @description
	 * @param {Date} date?
	 * @param {HexColorString} textColor?
	 * @returns {string}
	 */
	public addDate(date: Date = new Date(), textColor: HexColorString = hexColors.darkKhaki): string {
		return `[${addColor(date.toDateString(), textColor)}]`;
	}

	/**
	 * @description
	 * @param {string} name
	 * @param {HexColorString} labelColor?
	 * @returns {string}
	 */
	public addLabel(name: string, labelColor?: HexColorString): string {
		return `[${addColor(name.toUpperCase(), labelColor)}]`;
	}
}
