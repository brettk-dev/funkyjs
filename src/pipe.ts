type PipeCallback = (...args: any[]) => any

const nativeTypes = ['number', 'bigint', 'string', 'boolean', 'undefined']

const copy = <T>(input: T): T => {
  if (input === null || nativeTypes.includes(typeof input)) return input

  if (Array.isArray(input)) return input.reduce((a, v) => [...a, copy(v)], [])

  return Object.entries(input).reduce<T>(
    (obj, [k, v]) => ({
      ...obj,
      [k]: copy(v),
    }),
    input
  )
}

export const pipe = <T>(value: T, ...fns: PipeCallback[]) =>
  fns.reduce((output, fn) => fn(copy<T>(output)), value)

console.log(
  pipe(
    10,
    (n: number) => n / 2,
    (n: number) => n * n,
    (n: number) => n + 15
  )
)

const typesCopy = copy(nativeTypes)

console.log(nativeTypes, typesCopy, nativeTypes === typesCopy)
