import ora from 'ora';

import { addColor, hexColors } from './';
import { VError } from 'verror';

import type { HexColorString } from './';
import type { Ora } from 'ora';

/**
 *
 */
export interface LoggerMessageOptions {
	labelColor: HexColorString | string;
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
	 * @param {string} message
	 * @returns {void}
	 */
	public info(message: string): void {
		this.write('info', message, { labelColor: hexColors.royalBlue });
	}

	/**
	 * @description
	 * @param {string} message
	 * @returns {void}
	 */
	public loading(message: string): void {
		/**
		 * loading
		 */
		this.write('loading', message, { labelColor: hexColors.royalBlue });
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
	 * @param {Date} date
	 * @returns {string}
	 */
	public addDate(date: Date = new Date()): string {
		return `[${addColor(date.toDateString(), hexColors.darkKhaki)}]`;
	}

	/**
	 * @description
	 * @param {string} name
	 * @param {HexColorString} color
	 * @returns {string}
	 */
	public addLabel(name: string, color: HexColorString): string {
		return `[${addColor(name.toUpperCase(), color)}]`;
	}

	/**
	 * @description
	 * @param {string} label
	 * @param {string} message
	 * @param {MessageOptions} options
	 * @returns {string[]}
	 */
	public buildMessage(label: string, message: string, options: LoggerMessageOptions): string[] {
		return [this.addDate(), this.addLabel(label, options.labelColor as HexColorString), message];
	}
}
