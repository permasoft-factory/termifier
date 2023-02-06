[@termifier/logger](README.md) / Exports

# @termifier/logger

## Table of contents

### Enumerations

- [LogLevel](enums/LogLevel.md)

### Classes

- [Logger](classes/Logger.md)

### Interfaces

- [LogColors](interfaces/LogColors.md)
- [LogOptions](interfaces/LogOptions.md)
- [LoggerColors](interfaces/LoggerColors.md)
- [LoggerOptions](interfaces/LoggerOptions.md)

### Type Aliases

- [ChalkInstance](modules.md#chalkinstance)
- [HexColorString](modules.md#hexcolorstring)
- [LogMethods](modules.md#logmethods)

### Variables

- [defaultLoggerColors](modules.md#defaultloggercolors)
- [hexColors](modules.md#hexcolors)

### Functions

- [addColor](modules.md#addcolor)
- [pipeColor](modules.md#pipecolor)

## Type Aliases

### ChalkInstance

Ƭ **ChalkInstance**: `Chalk` & { `supportsColor`: `ColorSupport`  }

A Chalk instance

#### Defined in

[utils/colors.ts:15](https://github.com/permasoft-factory/termifier/blob/0c2382e/packages/logger/src/utils/colors.ts#L15)

___

### HexColorString

Ƭ **HexColorString**: \`#${string}\` \| `string`

HEX color

#### Defined in

[utils/colors.ts:10](https://github.com/permasoft-factory/termifier/blob/0c2382e/packages/logger/src/utils/colors.ts#L10)

___

### LogMethods

Ƭ **LogMethods**: ``"debug"`` \| ``"info"`` \| ``"warn"`` \| ``"error"``

#### Defined in

[logger.ts:14](https://github.com/permasoft-factory/termifier/blob/0c2382e/packages/logger/src/logger.ts#L14)

## Variables

### defaultLoggerColors

• `Const` **defaultLoggerColors**: [`LoggerColors`](interfaces/LoggerColors.md)

#### Defined in

[logger.ts:112](https://github.com/permasoft-factory/termifier/blob/0c2382e/packages/logger/src/logger.ts#L112)

___

### hexColors

• `Const` **hexColors**: `Object`

See https://htmlcolorcodes.com/color-names/

#### Type declaration

| Name | Type |
| :------ | :------ |
| `crimson` | `string` |
| `darkKhaki` | `string` |
| `darkOrange` | `string` |
| `royalBlue` | `string` |
| `slateBlue` | `string` |
| `thistle` | `string` |

#### Defined in

[utils/colors.ts:20](https://github.com/permasoft-factory/termifier/blob/0c2382e/packages/logger/src/utils/colors.ts#L20)

## Functions

### addColor

▸ **addColor**(`text`, `style?`, `customChalk?`): `string`

**`Description`**

Add color or style to a text

**`Example`**

```typescript
import { addColor } from '@termifier/logger';

console.log(addColor('Hello world !', 'blue.bold'));
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | Text to stylisize |
| `style?` | `string` | - |
| `customChalk?` | [`ChalkInstance`](modules.md#chalkinstance) | - |

#### Returns

`string`

Stylized text

#### Defined in

[utils/colors.ts:59](https://github.com/permasoft-factory/termifier/blob/0c2382e/packages/logger/src/utils/colors.ts#L59)

___

### pipeColor

▸ **pipeColor**(`style`, `customChalk?`): [`ChalkInstance`](modules.md#chalkinstance)

**`Description`**

Pipe color or style to a text

**`Example`**

```typescript
import { pipeColor } from '@termifier/logger';

const blue = pipeColor('blue.bold');
console.log(blue('Hello world !'));
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | `string` |
| `customChalk?` | [`ChalkInstance`](modules.md#chalkinstance) |

#### Returns

[`ChalkInstance`](modules.md#chalkinstance)

A Chalk instance

#### Defined in

[utils/colors.ts:42](https://github.com/permasoft-factory/termifier/blob/0c2382e/packages/logger/src/utils/colors.ts#L42)
