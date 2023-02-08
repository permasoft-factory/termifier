import type { AnyBox } from './box';

/**
 * Form class
 */
export class Form {
	/**
	 * Content of the form, it is a array containing each boxes which composes it
	 */
	public content: { id: number; box: AnyBox }[];

	public constructor() {
		this.content = [];
	}

	/**
	 * @description Add any pre-made box to the form
	 * @param {AnyBox} box Any pre-made boxes
	 * @returns {void}
	 */
	public addBox(box: AnyBox): void {
		this.content.push({ id: this.content.length, box: box });
	}

	/*
	public removeBox(id: number) {
		this.content.slice(id, id);
	}
	*/

	/**
	 * @description Render the form in the terminal
	 */
	public render(): void {
		// Loop for each box composing the form
		this.content.forEach(({ box }) => {
			// Loop for each lines composing the box
			box.content.forEach((line) => {
				console.log(line);
			});
		});
	}
}
