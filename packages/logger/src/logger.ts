import { addColor, hexColors } from './';
import { isUndefined } from '@termifier/utilities';

import { VError } from 'verror';

import type { HexColorString } from './';

/**
 * Different parameters of the message to be stylized
 */
export interface LoggerMessageOptions {
	/**
	 *
	 */
	level: LogLevel;

	/**
	 *
	 */
	colors: {
		/**
		 *
		 */
		date?: HexColorString;

		/**
		 *
		 */
		label?: HexColorString;
	};
}

/**
 *
 */
export enum LogLevel {
	/**
	 *
	 */
	Debug = 10,

	/**
	 *
	 */
	Trace = 20,

	/**
	 *
	 */
	Info = 30,

	/**
	 *
	 */
	Warn = 40,

	/**
	 *
	 */
	Error = 50,

	/**
	 *
	 */
	Fatal = 60
}

/**
 *
 */
export type LogMethods = 'trace' | 'debug' | 'info' | 'warn' | 'error';

/**
 * Make your logs more ethetic, easier
 */
export class Logger {
	/**
	 *
	 */
	static levels = new Map<LogLevel, LogMethods>([
		[LogLevel.Debug, 'debug'],
		[LogLevel.Trace, 'trace'],
		[LogLevel.Info, 'info'],
		[LogLevel.Warn, 'warn'],
		[LogLevel.Error, 'error'],
		[LogLevel.Fatal, 'error']
	]);

	/**
	 *
	 */
	public constructor() {}

	/**
	 * @description
	 * @param {string} message Message to write
	 * @returns {void}
	 */
	public info(message: string): void {
		this.write('info', message, { level: LogLevel.Info, colors: { label: hexColors.royalBlue } });
	}

	/**
	 * @description
	 * @param {string} message Message to write
	 * @param {...any[]} params
	 * @returns {void}
	 */
	public error(message: string, ...params: any[]): void {
		const error = new VError(message, ...params);
		this.write('error', error.message, { level: LogLevel.Error, colors: { label: hexColors.crimson } });
	}

	/**
	 * @description Style a message to write in the terminal
	 * @param {string} label Label to identify the message category
	 * @param {string} message Message to write
	 * @param {LoggerMessageOptions} options Message options
	 * @returns {void}
	 */
	public write(label: string, message: string, options: LoggerMessageOptions): void {
		const method = Logger.levels.get(options.level);

		if (isUndefined(method)) return;

		console[method as LogMethods](this.buildMessage(label, message, options));
	}

	/**
	 * @description
	 * @param {string} label
	 * @param {string} message
	 * @param {LoggerMessageOptions} options
	 * @returns {string}
	 */
	public buildMessage(label: string, message: string, options: LoggerMessageOptions): string {
		return [this.addDate(undefined, options.colors.date), this.addLabel(label, options.colors.label), message].join(' ');
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
