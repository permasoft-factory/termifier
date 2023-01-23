[@termifier/logger](../README.md) / [Exports](../modules.md) / Logger

# Class: Logger

Make your logs more ethetic, easier

## Table of contents

### Constructors

- [constructor](Logger.md#constructor)

### Properties

- [loggerColors](Logger.md#loggercolors)
- [levels](Logger.md#levels)

### Methods

- [addDate](Logger.md#adddate)
- [addLabel](Logger.md#addlabel)
- [buildMessage](Logger.md#buildmessage)
- [debug](Logger.md#debug)
- [error](Logger.md#error)
- [fatal](Logger.md#fatal)
- [info](Logger.md#info)
- [warn](Logger.md#warn)
- [write](Logger.md#write)

## Constructors

### constructor

• **new Logger**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`LoggerOptions`](../interfaces/LoggerOptions.md) |

#### Defined in

[logger.ts:140](https://github.com/permasoft-factory/termifier/blob/39cb361/packages/logger/src/logger.ts#L140)

## Properties

### loggerColors

• **loggerColors**: [`LoggerColors`](../interfaces/LoggerColors.md)

#### Defined in

[logger.ts:124](https://github.com/permasoft-factory/termifier/blob/39cb361/packages/logger/src/logger.ts#L124)

___

### levels

▪ `Static` **levels**: `Map`<[`LogLevel`](../enums/LogLevel.md), [`LogMethods`](../modules.md#logmethods)\>

#### Defined in

[logger.ts:129](https://github.com/permasoft-factory/termifier/blob/39cb361/packages/logger/src/logger.ts#L129)

## Methods

### addDate

▸ **addDate**(`date?`, `dateColor?`): `string`

**`Description`**

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `date` | `undefined` \| `Date` | `undefined` |
| `dateColor` | `undefined` \| `string` | `hexColors.darkKhaki` |

#### Returns

`string`

#### Defined in

[logger.ts:224](https://github.com/permasoft-factory/termifier/blob/39cb361/packages/logger/src/logger.ts#L224)

___

### addLabel

▸ **addLabel**(`name`, `labelColor?`): `string`

**`Description`**

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `labelColor` | `undefined` \| `string` | `hexColors.thistle` |

#### Returns

`string`

#### Defined in

[logger.ts:234](https://github.com/permasoft-factory/termifier/blob/39cb361/packages/logger/src/logger.ts#L234)

___

### buildMessage

▸ **buildMessage**(`label`, `message`, `options`): `string`

**`Description`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |
| `message` | `string` |
| `options` | [`LogOptions`](../interfaces/LogOptions.md) |

#### Returns

`string`

#### Defined in

[logger.ts:214](https://github.com/permasoft-factory/termifier/blob/39cb361/packages/logger/src/logger.ts#L214)

___

### debug

▸ **debug**(`message`): `void`

**`Description`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | Message to write |

#### Returns

`void`

#### Defined in

[logger.ts:149](https://github.com/permasoft-factory/termifier/blob/39cb361/packages/logger/src/logger.ts#L149)

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

[logger.ts:177](https://github.com/permasoft-factory/termifier/blob/39cb361/packages/logger/src/logger.ts#L177)

___

### fatal

▸ **fatal**(`message`, `...params`): `void`

**`Description`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | Message to write |
| `...params` | `any`[] |  |

#### Returns

`void`

#### Defined in

[logger.ts:188](https://github.com/permasoft-factory/termifier/blob/39cb361/packages/logger/src/logger.ts#L188)

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

[logger.ts:158](https://github.com/permasoft-factory/termifier/blob/39cb361/packages/logger/src/logger.ts#L158)

___

### warn

▸ **warn**(`message`): `void`

**`Description`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | Message to write |

#### Returns

`void`

#### Defined in

[logger.ts:167](https://github.com/permasoft-factory/termifier/blob/39cb361/packages/logger/src/logger.ts#L167)

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
| `options` | [`LogOptions`](../interfaces/LogOptions.md) | Message options |

#### Returns

`void`

#### Defined in

[logger.ts:200](https://github.com/permasoft-factory/termifier/blob/39cb361/packages/logger/src/logger.ts#L200)
