import { Logger } from '@termifier/logger';
import { setTerminalTitle } from './utils';

import type { Form } from './structures';

/**
 *
 */
export interface AppOptions {
	name: string;
}

/**
 *
 */
export class App {
	/**
	 *
	 */
	public logger: Logger;

	/**
	 *
	 */
	public currentForm: Form | undefined;

	/**
	 *
	 */
	public constructor(options: AppOptions) {
		setTerminalTitle(options.name);

		this.logger = new Logger();
	}

	/**
	 *
	 */
	public setForm(form: Form) {
		this.currentForm = form;
	}

	/**
	 *
	 */
	public run() {
		// Render form
		try {
			this.currentForm?.render();
		} catch {
			return console.error('Unable to render form');
		}
	}
}
