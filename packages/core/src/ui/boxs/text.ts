import { BaseBox } from '../box';

/**
 * Text box class
 */
export class TextBox extends BaseBox {
	public constructor() {
		super();

		this.type = 'text';
	}

	/**
	 * @description Add any type of content to the text box
	 * @param {any} content Any type of content
	 * @returns {void}
	 */
	public addContent(content: any): void {
		this.content.push(content);
	}
}
