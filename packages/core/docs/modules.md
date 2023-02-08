[@termifier/core](README.md) / Exports

# @termifier/core

## Table of contents

### Classes

- [App](classes/App.md)
- [BaseBox](classes/BaseBox.md)
- [Form](classes/Form.md)
- [SpacerBox](classes/SpacerBox.md)
- [TextBox](classes/TextBox.md)

### Interfaces

- [AppOptions](interfaces/AppOptions.md)
- [SpacerBoxOptions](interfaces/SpacerBoxOptions.md)

### Type Aliases

- [AnyBox](modules.md#anybox)

### Functions

- [clearTerminal](modules.md#clearterminal)
- [setTerminalTitle](modules.md#setterminaltitle)

## Type Aliases

### AnyBox

Ƭ **AnyBox**: [`BaseBox`](classes/BaseBox.md) \| [`SpacerBox`](classes/SpacerBox.md) \| [`TextBox`](classes/TextBox.md)

A type accepting all pre-made boxes

#### Defined in

ui/box.ts:6

## Functions

### clearTerminal

▸ **clearTerminal**(): `void`

**`Description`**

Clear the terminal

#### Returns

`void`

#### Defined in

[utils/utils.ts:7](https://github.com/permasoft-factory/termifier/blob/331487a/packages/core/src/utils/utils.ts#L7)

___

### setTerminalTitle

▸ **setTerminalTitle**(`title`): `void`

**`Author`**

daguej

**`Description`**

What happens when you set process.title differs by platform. On *nix, it changes the process name in the process table,
which is not really desireable for us. On Windows, you can't change the name of a running process, so libuv just calls SetConsoleTitle.
So for our purposes, setting process.title is fine on Windows. For everyone else, we'll write the ANSI OSC escape code for the terminal
emulator to handle. (ANSI escapes are parsed and discarded by libuv on Windows)
See also: https://github.com/daguej/node-windows-console-title/issues/1`

**`See`**

https://github.com/daguej/node-console-title

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | New title to rename the terminal |

#### Returns

`void`

#### Defined in

[utils/utils.ts:24](https://github.com/permasoft-factory/termifier/blob/331487a/packages/core/src/utils/utils.ts#L24)
