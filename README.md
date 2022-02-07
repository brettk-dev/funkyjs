# funky

This is my personal pet project created for the fun of it.

## Features:

### `chain` _(deprecated in favor of [pipe](#pipe))_

Allows a value to be chained through multiple functions.

Example:

```javascript
const { value } = chain(5)
  .pipe((n) => n * n)
  .pipe((n) => n - 1)
  .pipe((n) => n / 6)

console.log(value) // 4
```

### `curry`

Takes an "n-ary" function and converts it into a series of unary ones.

Example:

```javascript
const add = (a, b) => a + b
const addCurried = curry(add)

console.log(addCurried(1)(1)) // 2
```

### `pipe`

Sends a value through a series of provided functions.

Example:

```javascript
const value = pipe(
  5,
  (n) => n * n,
  (n) => n - 1,
  (n) => n / 6
)

console.log(value) // 4
```

