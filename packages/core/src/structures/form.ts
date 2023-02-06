import logUpdate from 'log-update';

import type { SpacerBox, Box } from './boxs';

/**
 * 
 */
export type Boxs = SpacerBox | Box;

/**
 *
 */
export class Form {
	/**
	 *
	 */
	boxs: { id: number; box:  SpacerBox | Box }[];

	/**
	 * 
	 */
	renderer: logUpdate.LogUpdate & { readonly stderr: logUpdate.LogUpdate; readonly create: (stream: NodeJS.WritableStream, options?: logUpdate.Options | undefined) => logUpdate.LogUpdate };

	/**
	 *
	 */
	public constructor() {
		this.boxs = [];
		this.renderer = logUpdate;
	}

	/**
	 *
	 * @param box
	 */
	public addBox(box: Boxs) {
		this.boxs.push({ id: this.boxs.length, box: box });
	}

	/**
	 *
	 * @param id
	 */
	/*
	public removeBox(id: number) {
		this.boxs.slice(id, id);
	}
	*/

	/**
	 *
	 */
	public render() {
		console.clear();

		const form: any[] = [];
		this.boxs.forEach(({ box }) => form.push(box.content.join('\n')));

		this.renderer(form.join('\n'));
	}
}
