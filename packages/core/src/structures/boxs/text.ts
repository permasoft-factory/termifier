import { BaseBox } from './base';
import type { BaseBoxOptions } from './base';

/**
 *
 */
export interface TextBoxOptions extends BaseBoxOptions {}

/**
 *
 */
export class TextBox extends BaseBox {
	/**
	 *
	 */
	public declare boxOptions: TextBoxOptions | undefined;

	/**
	 *
	 */
	public constructor(options?: TextBoxOptions) {
		super(options);
	}

	/**
	 *
	 */
	public addContent(content: any): void {
		this.content.push(content);
	}
}
