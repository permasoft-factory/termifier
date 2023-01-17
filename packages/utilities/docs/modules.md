[@termifier/utilities](README.md) / Exports

# @termifier/utilities

## Table of contents

### Functions

- [centerContent](modules.md#centercontent)
- [isNegative](modules.md#isnegative)
- [readFileAsync](modules.md#readfileasync)

## Functions

### centerContent

▸ **centerContent**(`message`, `stdout?`): `string`

**`Description`**

Content to center in the writable side of a TTY

**`Exemple`**

```typescript
import { centerContent } from '@termifier/utilities';

console.Log('Hello world  !');

// > output
// ╭────────────────────────╮
// │                        │
// │ Hello world  !         │
// │                        │
// ╰────────────────────────╯

console.Log(centerContent('Hello world  !'));

// > output
// ╭────────────────────────╮
// │                        │
// │     Hello world  !     │
// │                        │
// ╰────────────────────────╯
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `message` | `string` | `undefined` | Message to center |
| `stdout` | `WriteStream` | `process.stdout` | - |

#### Returns

`string`

The centered message if possible

#### Defined in

[logger.ts:35](https://github.com/permasoft-factory/termifier/blob/4ed0c10/packages/utilities/src/logger.ts#L35)

___

### isNegative

▸ **isNegative**(`number`): `boolean`

**`Description`**

Checks if the given number is negative

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `number` | `number` | Number to test |

#### Returns

`boolean`

#### Defined in

maths.ts:6

___

### readFileAsync

▸ **readFileAsync**(`filePath`, `encoding?`): `Promise`<`string`\>

**`Description`**

Read asynchronously the entire contents of a file

**`Exemple`**

file.txt
```
ABCD1234
NDZDOZDO
C399FD8B
```

index.ts
```typescript
import { readFileAsync } from '@termifier/utilities';

const fileContent = await readFileAsync('./file.txt');
console.Log(fileContent);

// > output
// ABCD1234
// NDZDOZDO
// C399FD8B
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `filePath` | `string` | `undefined` | Path to the file to read |
| `encoding` | `BufferEncoding` | `'utf-8'` | - |

#### Returns

`Promise`<`string`\>

File content

#### Defined in

files.ts:30
