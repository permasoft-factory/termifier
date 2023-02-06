[@termifier/core](../README.md) / [Exports](../modules.md) / Form

# Class: Form

## Table of contents

### Constructors

- [constructor](Form.md#constructor)

### Properties

- [boxs](Form.md#boxs)
- [renderer](Form.md#renderer)

### Methods

- [addBox](Form.md#addbox)
- [render](Form.md#render)

## Constructors

### constructor

• **new Form**()

#### Defined in

structures/form.ts:27

## Properties

### boxs

• **boxs**: { `box`: [`SpacerBox`](SpacerBox.md) \| [`Box`](Box.md) ; `id`: `number`  }[]

#### Defined in

structures/form.ts:17

___

### renderer

• **renderer**: `LogUpdate` & { `create`: (`stream`: `WritableStream`, `options?`: `Options`) => `LogUpdate` ; `stderr`: `LogUpdate`  }

#### Defined in

structures/form.ts:22

## Methods

### addBox

▸ **addBox**(`box`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | [`Boxs`](../modules.md#boxs) |

#### Returns

`void`

#### Defined in

structures/form.ts:36

___

### render

▸ **render**(): `void`

#### Returns

`void`

#### Defined in

structures/form.ts:53
