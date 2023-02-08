import { BaseBox } from '../box';

/**
 * Spacer box options
 */
export interface SpacerBoxOptions {
	/**
	 * Spacing length
	 */
	space: number;
}

/**
 * Spacer box class
 */
export class SpacerBox extends BaseBox {
	/**
	 * Spacer box options
	 */
	private options: SpacerBoxOptions;

	/**
	 * Spacing with newlines
	 */
	public space: string;

	/**
	 * @param {SpacerBoxOptions} options Options of spacer box
	 */
	public constructor(options: SpacerBoxOptions) {
		super();

		this.options = options;

		this.space = '\n'.repeat(this.options.space);
		this.content.push(this.space);
	}
}
