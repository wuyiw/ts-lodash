### this repo reproduces performance issue of latest `@types/lodash` (currently `@4.14.101`)

## how to measure
install dependencies and in `src/pick.ts` try typing `this.pickedWithLongName` in the `logPicked` method and feel when code completion shows up.

## what to compare
* toggle block comment on `.pick(['foo', 'bar', 'baz'])`

or

* switch `@types/lodash` to older version, for example, `@4.14.81` and reload vscode