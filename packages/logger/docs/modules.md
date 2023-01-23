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

[utils/colors.ts:13](https://github.com/permasoft-factory/termifier/blob/f5e2df5/packages/logger/src/utils/colors.ts#L13)

___

### HexColorString

Ƭ **HexColorString**: \`#${string}\` \| `string`

HEX color

#### Defined in

[utils/colors.ts:8](https://github.com/permasoft-factory/termifier/blob/f5e2df5/packages/logger/src/utils/colors.ts#L8)

___

### LogMethods

Ƭ **LogMethods**: ``"debug"`` \| ``"trace"`` \| ``"info"`` \| ``"warn"`` \| ``"error"``

#### Defined in

[logger.ts:13](https://github.com/permasoft-factory/termifier/blob/f5e2df5/packages/logger/src/logger.ts#L13)

## Variables

### defaultLoggerColors

• `Const` **defaultLoggerColors**: [`LoggerColors`](interfaces/LoggerColors.md)

#### Defined in

[logger.ts:115](https://github.com/permasoft-factory/termifier/blob/f5e2df5/packages/logger/src/logger.ts#L115)

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

[utils/colors.ts:18](https://github.com/permasoft-factory/termifier/blob/f5e2df5/packages/logger/src/utils/colors.ts#L18)

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

[utils/colors.ts:57](https://github.com/permasoft-factory/termifier/blob/f5e2df5/packages/logger/src/utils/colors.ts#L57)

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

[utils/colors.ts:40](https://github.com/permasoft-factory/termifier/blob/f5e2df5/packages/logger/src/utils/colors.ts#L40)
