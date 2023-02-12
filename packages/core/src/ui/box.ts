import type { SpacerBox, TextBox } from './boxs';

/**
 * A type accepting all pre-made boxes
 */
export type AnyBox = BaseBox | SpacerBox | TextBox;

export type BoxType = 'base' | 'menu' | 'spacer' | 'text';

/**
 * Class with basic functions for a box
 */
export class BaseBox {
	/**
	 * Content of the box, it is a array containing each lines which composes it
	 */
	public content: any[];

	/**
	 * Type of the box
	 */
	public type: BoxType;

	public constructor() {
		this.content = [];
		this.type = 'base';
	}
}
