[@termifier/logger](../README.md) / [Exports](../modules.md) / Logger

# Class: Logger

Make your logs more ethetic, easier

## Table of contents

### Constructors

- [constructor](Logger.md#constructor)

### Properties

- [dateFormat](Logger.md#dateformat)
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

[logger.ts:147](https://github.com/permasoft-factory/termifier/blob/0c2382e/packages/logger/src/logger.ts#L147)

## Properties

### dateFormat

• **dateFormat**: `string`

#### Defined in

[logger.ts:126](https://github.com/permasoft-factory/termifier/blob/0c2382e/packages/logger/src/logger.ts#L126)

___

### loggerColors

• **loggerColors**: [`LoggerColors`](../interfaces/LoggerColors.md)

#### Defined in

[logger.ts:131](https://github.com/permasoft-factory/termifier/blob/0c2382e/packages/logger/src/logger.ts#L131)

___

### levels

▪ `Static` `Private` **levels**: `Map`<[`LogLevel`](../enums/LogLevel.md), [`LogMethods`](../modules.md#logmethods)\>

#### Defined in

[logger.ts:136](https://github.com/permasoft-factory/termifier/blob/0c2382e/packages/logger/src/logger.ts#L136)

## Methods

### addDate

▸ **addDate**(`dateFormat?`, `dateColor?`): `string`

**`Description`**

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dateFormat` | `undefined` \| `string` | `undefined` |
| `dateColor` | `undefined` \| `string` | `hexColors.darkKhaki` |

#### Returns

`string`

#### Defined in

[logger.ts:232](https://github.com/permasoft-factory/termifier/blob/0c2382e/packages/logger/src/logger.ts#L232)

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

[logger.ts:242](https://github.com/permasoft-factory/termifier/blob/0c2382e/packages/logger/src/logger.ts#L242)

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

[logger.ts:222](https://github.com/permasoft-factory/termifier/blob/0c2382e/packages/logger/src/logger.ts#L222)

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

[logger.ts:157](https://github.com/permasoft-factory/termifier/blob/0c2382e/packages/logger/src/logger.ts#L157)

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

[logger.ts:185](https://github.com/permasoft-factory/termifier/blob/0c2382e/packages/logger/src/logger.ts#L185)

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

[logger.ts:196](https://github.com/permasoft-factory/termifier/blob/0c2382e/packages/logger/src/logger.ts#L196)

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

[logger.ts:166](https://github.com/permasoft-factory/termifier/blob/0c2382e/packages/logger/src/logger.ts#L166)

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

[logger.ts:175](https://github.com/permasoft-factory/termifier/blob/0c2382e/packages/logger/src/logger.ts#L175)

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

[logger.ts:208](https://github.com/permasoft-factory/termifier/blob/0c2382e/packages/logger/src/logger.ts#L208)
