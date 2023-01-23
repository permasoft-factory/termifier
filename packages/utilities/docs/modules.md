[@termifier/utilities](README.md) / Exports

# @termifier/utilities

## Table of contents

### Functions

- [centerContent](modules.md#centercontent)
- [isNegative](modules.md#isnegative)
- [isUndefined](modules.md#isundefined)
- [readFileAsync](modules.md#readfileasync)

## Functions

### centerContent

▸ **centerContent**(`message`, `stdout?`): `string`

**`Description`**

Content to center in the writable side of a TTY

**`Exemple`**

```typescript
import { centerContent } from '@termifier/utilities';

console.log('Hello world  !');
// > output
// ╭────────────────────────╮
// │                        │
// │ Hello world  !         │
// │                        │
// ╰────────────────────────╯

console.log(centerContent('Hello world  !'));
// > output
// ╭────────────────────────╮
// │                        │
// │     Hello world  !     │
// │                        │
// ╰────────────────────────╯
```

console.log('Hello world  !\nFrom NodeJs');
// > output
// ╭────────────────────────╮
// │                        │
// │ Hello world  !         │
// │ From NodeJs            │
// │                        │
// ╰────────────────────────╯

console.log(centerContent('Hello world  !\nFrom NodeJs'));
// > output
// ╭────────────────────────╮
// │                        │
// │     Hello world  !     │
// │      From NodeJs       │
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

[logger.ts:52](https://github.com/permasoft-factory/termifier/blob/8b62833/packages/utilities/src/logger.ts#L52)

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

[maths.ts:6](https://github.com/permasoft-factory/termifier/blob/8b62833/packages/utilities/src/maths.ts#L6)

___

### isUndefined

▸ **isUndefined**(`value`): `boolean`

**`Description`**

Checks if the given value is undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | Value to test |

#### Returns

`boolean`

#### Defined in

[assert.ts:6](https://github.com/permasoft-factory/termifier/blob/8b62833/packages/utilities/src/assert.ts#L6)

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
console.log(fileContent);

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

[files.ts:30](https://github.com/permasoft-factory/termifier/blob/8b62833/packages/utilities/src/files.ts#L30)
