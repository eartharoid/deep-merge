# deepmerge

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/eartharoid/deep-merge/Test?label=Test&logo=github&style=flat-square)

Simple deep object merging for NodeJS.

## Installation

Install with npm/pnpm/yarn:

`npm i @eartharoid/deep-merge`

## Usage

### `merge(...objects)`

> Merge objects deeply.

- `...objects` - objects to merge

#### Example

```js
const merge = require('@eartharoid/deep-merge');

let merged = merge(object1, object2);
```
