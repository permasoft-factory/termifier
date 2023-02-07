/**
 *
 */
export interface BaseBoxOptions {}

/**
 *
 */
export class BaseBox {
	/**
	 *
	 */
	public boxOptions: BaseBoxOptions | undefined;

	/**
	 *
	 */
	public content: any[];

	/**
	 *
	 */
	public constructor(options?: BaseBoxOptions) {
		this.boxOptions = options;
		this.content = [];
	}
}
