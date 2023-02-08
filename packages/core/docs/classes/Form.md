[@termifier/core](../README.md) / [Exports](../modules.md) / Form

# Class: Form

Form class

## Table of contents

### Constructors

- [constructor](Form.md#constructor)

### Properties

- [content](Form.md#content)

### Methods

- [addBox](Form.md#addbox)
- [render](Form.md#render)

## Constructors

### constructor

• **new Form**()

#### Defined in

ui/form.ts:12

## Properties

### content

• **content**: { `box`: [`AnyBox`](../modules.md#anybox) ; `id`: `number`  }[]

Content of the form, it is a array containing each boxes which composes it

#### Defined in

ui/form.ts:10

## Methods

### addBox

▸ **addBox**(`box`): `void`

**`Description`**

Add any pre-made box to the form

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `box` | [`AnyBox`](../modules.md#anybox) | Any pre-made boxes |

#### Returns

`void`

#### Defined in

ui/form.ts:21

___

### render

▸ **render**(): `void`

**`Description`**

Render the form in the terminal

#### Returns

`void`

#### Defined in

ui/form.ts:34
