import type { SpacerBox, TextBox } from './boxs';

/**
 *
 */
export type AnyBox = SpacerBox | TextBox;

/**
 *
 */
export class Form {
	/**
	 *
	 */
	public content: { id: number; box: AnyBox }[];

	/**
	 *
	 */
	public constructor() {
		this.content = [];
	}

	/**
	 *
	 * @param box
	 */
	public addBox(box: AnyBox) {
		this.content.push({ id: this.content.length, box: box });
	}

	/**
	 *
	 * @param id
	 */
	/*
	public removeBox(id: number) {
		this.content.slice(id, id);
	}
	*/

	/**
	 *
	 */
	public render() {
		this.content.forEach(({ box }) => {
			box.content.forEach((line) => {
				console.log(line);
			});
		});
	}
}
