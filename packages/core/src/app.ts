import { Logger } from '@termifier/logger';
import { clearTerminal, setTerminalTitle } from './utils';

import type { Form } from './ui';

/**
 * App options
 */
export interface AppOptions {
	name: string;
}

/**
 * App class
 */
export class App {
	/**
	 * Logger that will manage the application logs
	 */
	public logger: Logger;

	/**
	 * Current form, the one that will be displayed
	 */
	public currentForm: Form | undefined;

	/**
	 * @param {AppOptions} options App options
	 */
	public constructor(options: AppOptions) {
		// Rename the terminal with the application name
		setTerminalTitle(options.name);

		this.logger = new Logger();
	}

	/**
	 * @description Set the current form
	 * @param {Form} form A form
	 * @returns {void}
	 */
	public setForm(form: Form) {
		this.currentForm = form;
	}

	/**
	 * @description Execute the application and launch the rendering loop
	 * @returns {void}
	 */
	public run() {
		try {
			// Rendering loop
			setInterval(() => {
				clearTerminal();
				this.currentForm?.render();
			}, 2000);
		} catch {
			clearTerminal();

			// Todo set a error form
			return this.logger.error('Unable to render form');
		}
	}
}
