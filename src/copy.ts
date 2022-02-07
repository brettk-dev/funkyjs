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

export default copy