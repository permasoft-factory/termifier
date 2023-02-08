[@termifier/core](../README.md) / [Exports](../modules.md) / App

# Class: App

App class

## Table of contents

### Constructors

- [constructor](App.md#constructor)

### Properties

- [currentForm](App.md#currentform)
- [logger](App.md#logger)

### Methods

- [run](App.md#run)
- [setForm](App.md#setform)

## Constructors

### constructor

• **new App**(`options`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`AppOptions`](../interfaces/AppOptions.md) | App options |

#### Defined in

[app.ts:30](https://github.com/permasoft-factory/termifier/blob/331487a/packages/core/src/app.ts#L30)

## Properties

### currentForm

• **currentForm**: [`Form`](Form.md)

Current form, the one that will be displayed

#### Defined in

[app.ts:25](https://github.com/permasoft-factory/termifier/blob/331487a/packages/core/src/app.ts#L25)

___

### logger

• **logger**: `Logger`

Logger that will manage the application logs

#### Defined in

[app.ts:20](https://github.com/permasoft-factory/termifier/blob/331487a/packages/core/src/app.ts#L20)

## Methods

### run

▸ **run**(): `void`

**`Description`**

Execute the application and launch the rendering loop

#### Returns

`void`

#### Defined in

[app.ts:50](https://github.com/permasoft-factory/termifier/blob/331487a/packages/core/src/app.ts#L50)

___

### setForm

▸ **setForm**(`form`): `void`

**`Description`**

Set the current form

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `form` | [`Form`](Form.md) | A form |

#### Returns

`void`

#### Defined in

[app.ts:42](https://github.com/permasoft-factory/termifier/blob/331487a/packages/core/src/app.ts#L42)
