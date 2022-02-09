const copyArray = <T extends U[], U>(arr: T): T => {
  if (!Array.isArray(arr))
    throw new Error('The parameter needs to be an array.')
  return arr.map((v) => copy(v)) as T
}

const copyObject = <T extends { [key: string]: U }, U>(obj: T): T =>
  Object.entries(obj).reduce<{ [key: string]: U }>(
    (o, [k, v]) => ({
      ...o,
      [k]: copy(v),
    }),
    {}
  ) as T

const copy = <T>(input: T): T => {
  if (input === null || typeof input !== 'object') return input

  if (Array.isArray(input)) return copyArray(input)

  return copyObject(input as T & { [key: string]: unknown })
}

export default copy
