import { promisify } from 'node:util';
import { readFile } from 'node:fs';

/**
 * @description Read asynchronously the entire contents of a file
 * @param {string} filePath Path to the file to read
 * @param {BufferEncoding} encoding?
 * @returns {Promise<string>} File content
 * @exemple
 * file.txt
 * ```
 * ABCD1234
 * NDZDOZDO
 * C399FD8B
 * ```
 *
 * index.ts
 * ```typescript
 * import { readFileAsync } from '@termifier/utilities';
 *
 * const fileContent = await readFileAsync('./file.txt');
 * console.Log(fileContent);
 *
 * // > output
 * // ABCD1234
 * // NDZDOZDO
 * // C399FD8B
 * ```
 */
export async function readFileAsync(filePath: string, encoding: BufferEncoding = 'utf-8'): Promise<string> {
	return await promisify(readFile)(filePath, { encoding: encoding });
}
