# funky

This is my personal pet project created for the fun of it.

## Features:

### `copy`

Creates a deep copy of an object or array.

Example:

```javascript
import { copy } from '@brettk-dev/funky'

const original = { one: 1 }
const value = copy(original)

console.log(value === (original)) // false
console.log(value.one === original.one) // true
```

### `curry`

Takes an "n-ary" function and converts it into a series of unary ones.

Example:

```javascript
import { curry } from '@brettk-dev/funky'

const add = (a, b) => a + b
const addCurried = curry(add)

console.log(addCurried(1)(1)) // 2
```

### `map`

Applys a provieded function to array elements or object properties.

Example:

```javascript
import { map } from '@brettk-dev/funky'

const doubled = map([1, 2, 3], (n) => n * 2)

console.log(doubled) // [2, 4, 6]
```

### `pipe`

Sends a value through a series of provided functions.

Example:

```javascript
import { pipe } from '@brettk-dev/funky'

const value = pipe(
  5,
  (n) => n * n,
  (n) => n - 1,
  (n) => n / 6
)

console.log(value) // 4
```

