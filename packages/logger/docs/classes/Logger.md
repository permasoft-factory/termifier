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
- [trace](Logger.md#trace)
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

[logger.ts:146](https://github.com/permasoft-factory/termifier/blob/3a2c8f0/packages/logger/src/logger.ts#L146)

## Properties

### loggerColors

• **loggerColors**: [`LoggerColors`](../interfaces/LoggerColors.md)

#### Defined in

[logger.ts:129](https://github.com/permasoft-factory/termifier/blob/3a2c8f0/packages/logger/src/logger.ts#L129)

___

### levels

▪ `Static` **levels**: `Map`<[`LogLevel`](../enums/LogLevel.md), [`LogMethods`](../modules.md#logmethods)\>

#### Defined in

[logger.ts:134](https://github.com/permasoft-factory/termifier/blob/3a2c8f0/packages/logger/src/logger.ts#L134)

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

[logger.ts:239](https://github.com/permasoft-factory/termifier/blob/3a2c8f0/packages/logger/src/logger.ts#L239)

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

[logger.ts:249](https://github.com/permasoft-factory/termifier/blob/3a2c8f0/packages/logger/src/logger.ts#L249)

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

[logger.ts:229](https://github.com/permasoft-factory/termifier/blob/3a2c8f0/packages/logger/src/logger.ts#L229)

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

[logger.ts:155](https://github.com/permasoft-factory/termifier/blob/3a2c8f0/packages/logger/src/logger.ts#L155)

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

[logger.ts:192](https://github.com/permasoft-factory/termifier/blob/3a2c8f0/packages/logger/src/logger.ts#L192)

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

[logger.ts:203](https://github.com/permasoft-factory/termifier/blob/3a2c8f0/packages/logger/src/logger.ts#L203)

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

[logger.ts:173](https://github.com/permasoft-factory/termifier/blob/3a2c8f0/packages/logger/src/logger.ts#L173)

___

### trace

▸ **trace**(`message`): `void`

**`Description`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | Message to write |

#### Returns

`void`

#### Defined in

[logger.ts:164](https://github.com/permasoft-factory/termifier/blob/3a2c8f0/packages/logger/src/logger.ts#L164)

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

[logger.ts:182](https://github.com/permasoft-factory/termifier/blob/3a2c8f0/packages/logger/src/logger.ts#L182)

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

[logger.ts:215](https://github.com/permasoft-factory/termifier/blob/3a2c8f0/packages/logger/src/logger.ts#L215)
