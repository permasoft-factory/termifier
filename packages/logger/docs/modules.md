[@termifier/logger](README.md) / Exports

# @termifier/logger

## Table of contents

### Enumerations

- [LogLevel](enums/LogLevel.md)

### Classes

- [Logger](classes/Logger.md)

### Interfaces

- [LoggerMessageOptions](interfaces/LoggerMessageOptions.md)

### Type Aliases

- [HexColorString](modules.md#hexcolorstring)
- [LogMethods](modules.md#logmethods)

### Variables

- [hexColors](modules.md#hexcolors)

### Functions

- [addColor](modules.md#addcolor)

## Type Aliases

### HexColorString

Ƭ **HexColorString**: \`#${string}\` \| `string`

#### Defined in

[utils/colors.ts:6](https://github.com/permasoft-factory/termifier/blob/31917b1/packages/logger/src/utils/colors.ts#L6)

___

### LogMethods

Ƭ **LogMethods**: ``"trace"`` \| ``"debug"`` \| ``"info"`` \| ``"warn"`` \| ``"error"``

#### Defined in

[logger.ts:71](https://github.com/permasoft-factory/termifier/blob/31917b1/packages/logger/src/logger.ts#L71)

## Variables

### hexColors

• `Const` **hexColors**: `Object`

See https://htmlcolorcodes.com/color-names/

#### Type declaration

| Name | Type |
| :------ | :------ |
| `crimson` | `string` |
| `darkKhaki` | `string` |
| `royalBlue` | `string` |

#### Defined in

[utils/colors.ts:11](https://github.com/permasoft-factory/termifier/blob/31917b1/packages/logger/src/utils/colors.ts#L11)

## Functions

### addColor

▸ **addColor**(`text`, `hexColor?`): `string`

**`Description`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `hexColor?` | `string` |

#### Returns

`string`

#### Defined in

[utils/colors.ts:23](https://github.com/permasoft-factory/termifier/blob/31917b1/packages/logger/src/utils/colors.ts#L23)
