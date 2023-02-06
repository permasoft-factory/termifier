/**
 * 
 */
export interface SpacerBoxOptions {
	/**
	 * 
	 */
	space: number
}

/**
 *
 */
export class SpacerBox {
	/***
	 *
	 */
	public content: any[];

	/**
	 *
	 */
	public constructor(options: SpacerBoxOptions) {
		this.content = [];

		this.content.push('\n'.repeat(options.space));
	}
}
