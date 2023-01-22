[@termifier/logger](../README.md) / [Exports](../modules.md) / Logger

# Class: Logger

Make your logs more ethetic, easier

## Table of contents

### Constructors

- [constructor](Logger.md#constructor)

### Properties

- [levels](Logger.md#levels)

### Methods

- [addDate](Logger.md#adddate)
- [addLabel](Logger.md#addlabel)
- [buildMessage](Logger.md#buildmessage)
- [error](Logger.md#error)
- [info](Logger.md#info)
- [write](Logger.md#write)

## Constructors

### constructor

• **new Logger**()

#### Defined in

[logger.ts:92](https://github.com/permasoft-factory/termifier/blob/31917b1/packages/logger/src/logger.ts#L92)

## Properties

### levels

▪ `Static` **levels**: `Map`<[`LogLevel`](../enums/LogLevel.md), [`LogMethods`](../modules.md#logmethods)\>

#### Defined in

[logger.ts:80](https://github.com/permasoft-factory/termifier/blob/31917b1/packages/logger/src/logger.ts#L80)

## Methods

### addDate

▸ **addDate**(`date?`, `textColor?`): `string`

**`Description`**

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `date` | `Date` | `undefined` |
| `textColor` | `string` | `hexColors.darkKhaki` |

#### Returns

`string`

#### Defined in

[logger.ts:146](https://github.com/permasoft-factory/termifier/blob/31917b1/packages/logger/src/logger.ts#L146)

___

### addLabel

▸ **addLabel**(`name`, `labelColor?`): `string`

**`Description`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `labelColor?` | `string` |

#### Returns

`string`

#### Defined in

[logger.ts:156](https://github.com/permasoft-factory/termifier/blob/31917b1/packages/logger/src/logger.ts#L156)

___

### buildMessage

▸ **buildMessage**(`label`, `message`, `options`): `string`

**`Description`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |
| `message` | `string` |
| `options` | [`LoggerMessageOptions`](../interfaces/LoggerMessageOptions.md) |

#### Returns

`string`

#### Defined in

[logger.ts:136](https://github.com/permasoft-factory/termifier/blob/31917b1/packages/logger/src/logger.ts#L136)

___

### error

▸ **error**(`message`, `...params`): `void`

**`Description`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | Message to write |
| `...params` | `any`[] |  |

#### Returns

`void`

#### Defined in

[logger.ts:109](https://github.com/permasoft-factory/termifier/blob/31917b1/packages/logger/src/logger.ts#L109)

___

### info

▸ **info**(`message`): `void`

**`Description`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | Message to write |

#### Returns

`void`

#### Defined in

[logger.ts:99](https://github.com/permasoft-factory/termifier/blob/31917b1/packages/logger/src/logger.ts#L99)

___

### write

▸ **write**(`label`, `message`, `options`): `void`

**`Description`**

Style a message to write in the terminal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `label` | `string` | Label to identify the message category |
| `message` | `string` | Message to write |
| `options` | [`LoggerMessageOptions`](../interfaces/LoggerMessageOptions.md) | Message options |

#### Returns

`void`

#### Defined in

[logger.ts:121](https://github.com/permasoft-factory/termifier/blob/31917b1/packages/logger/src/logger.ts#L121)
