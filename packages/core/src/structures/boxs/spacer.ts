import { BaseBox } from './base';
import type { BaseBoxOptions } from './base';

/**
 *
 */
export interface SpacerBoxOptions extends BaseBoxOptions {
	/**
	 *
	 */
	space: number;
}

/**
 *
 */
export class SpacerBox extends BaseBox {
	/**
	 *
	 */
	public declare boxOptions: SpacerBoxOptions | undefined;

	/**
	 *
	 */
	public spacer: string;

	/**
	 *
	 */
	public constructor(options: SpacerBoxOptions) {
		super(options);

		this.spacer = '\n'.repeat(this.boxOptions?.space as number);
		this.content.push(this.spacer);
	}
}
