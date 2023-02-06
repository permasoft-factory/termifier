/**
 * 
 */
export interface TextBoxOptions {
	
}

/**
 *
 */
export class Box {
	/***
	 *
	 */
	public content: any[];

	/**
	 *
	 */
	public constructor() {
		this.content = [];
	}

	/**
	 *
	 */
	public addContent(content: any) {
		this.content.push(content);
	}
}
