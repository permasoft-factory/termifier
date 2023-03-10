import mergeObjects from 'merge-objects';
import moment from 'moment';

import { addColor, hexColors } from './';
import { isUndefined } from '@termifier/utilities';

import VError from 'verror';

import type { HexColorString } from './';

/**
 *
 */
export type LogMethods = 'debug' | 'info' | 'warn' | 'error';

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
	Info = 20,

	/**
	 *
	 */
	Warn = 30,

	/**
	 *
	 */
	Error = 40,

	/**
	 *
	 */
	Fatal = 50
}

/**
 *
 */
export interface LoggerOptions {
	dateFormat?: string;
	colors?: LoggerColors;
}

/**
 *
 */
export interface LoggerColors {
	/**
	 *
	 */
	debug?: HexColorString;

	/**
	 *
	 */
	info?: HexColorString;

	/**
	 *
	 */
	warn?: HexColorString;

	/**
	 *
	 */
	error?: HexColorString;
}

/**
 * Different parameters of the message to be stylized
 */
export interface LogOptions {
	/**
	 *
	 */
	level: LogLevel;

	/**
	 *
	 */
	colors?: LogColors;
}

/**
 *
 */
export interface LogColors {
	/**
	 *
	 */
	date?: HexColorString;

	/**
	 *
	 */
	label?: HexColorString;
}

/**
 *
 */
export const defaultLoggerColors: LoggerColors = {
	debug: hexColors.slateBlue,
	info: hexColors.royalBlue,
	warn: hexColors.darkOrange,
	error: hexColors.crimson
};

/**
 * Make your logs more ethetic, easier
 */
export class Logger {
	/**
	 *
	 */
	public dateFormat: string;

	/**
	 *
	 */
	public loggerColors: LoggerColors;

	/**
	 *
	 */
	private static levels = new Map<LogLevel, LogMethods>([
		[LogLevel.Debug, 'debug'],
		[LogLevel.Info, 'info'],
		[LogLevel.Warn, 'warn'],
		[LogLevel.Error, 'error'],
		[LogLevel.Fatal, 'error']
	]);

	/**
	 *
	 */
	public constructor(options?: LoggerOptions) {
		this.dateFormat = isUndefined(options?.dateFormat) ? 'L - LTS' : (options?.dateFormat as string);
		this.loggerColors = isUndefined(options?.colors) ? defaultLoggerColors : mergeObjects(options?.colors as LoggerColors, defaultLoggerColors);
	}

	/**
	 * @description
	 * @param {string} message Message to write
	 * @returns {void}
	 */
	public debug(message: string): void {
		this.write('debug', message, { level: LogLevel.Debug, colors: { label: this.loggerColors.debug } });
	}

	/**
	 * @description
	 * @param {string} message Message to write
	 * @returns {void}
	 */
	public info(message: string): void {
		this.write('info', message, { level: LogLevel.Info, colors: { label: this.loggerColors.info } });
	}

	/**
	 * @description
	 * @param {string} message Message to write
	 * @returns {void}
	 */
	public warn(message: string): void {
		this.write('warn', message, { level: LogLevel.Warn, colors: { label: this.loggerColors.warn } });
	}

	/**
	 * @description
	 * @param {string} message Message to write
	 * @param {...any[]} params
	 * @returns {void}
	 */
	public error(message: string, ...params: any[]): void {
		const error: VError = new VError(message, ...params);
		this.write('error', error.message, { level: LogLevel.Error, colors: { label: this.loggerColors.error } });
	}

	/**
	 * @description
	 * @param {string} message Message to write
	 * @param {...any[]} params
	 * @returns {void}
	 */
	public fatal(message: string, ...params: any[]): void {
		const error: VError = new VError(message, ...params);
		this.write('fatal', error.message, { level: LogLevel.Error, colors: { label: this.loggerColors.error } });
	}

	/**
	 * @description Style a message to write in the terminal
	 * @param {string} label Label to identify the message category
	 * @param {string} message Message to write
	 * @param {LogOptions} options Message options
	 * @returns {void}
	 */
	public write(label: string, message: string, options: LogOptions): void {
		const method: LogMethods | undefined = Logger.levels.get(options.level);

		if (isUndefined(method)) return;
		console[method as LogMethods](this.buildMessage(label, message, options));
	}

	/**
	 * @description
	 * @param {string} label
	 * @param {string} message
	 * @param {LogOptions} options
	 * @returns {string}
	 */
	public buildMessage(label: string, message: string, options: LogOptions): string {
		return [this.addDate(), this.addLabel(label, options.colors?.label), message].join(' ');
	}

	/**
	 * @description
	 * @param {string | undefined} dateFormat?
	 * @param {HexColorString} dateColor?
	 * @returns {string}
	 */
	public addDate(dateFormat: string | undefined = this.dateFormat, dateColor: HexColorString | undefined = hexColors.darkKhaki): string {
		return `[${addColor(moment().format(dateFormat), dateColor)}]`;
	}

	/**
	 * @description
	 * @param {string} name
	 * @param {HexColorString | undefined} labelColor?
	 * @returns {string}
	 */
	public addLabel(name: string, labelColor: HexColorString | undefined = hexColors.thistle): string {
		return `[${addColor(name.toUpperCase(), labelColor)}]`;
	}
}
