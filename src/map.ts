import copy from './copy'

type MapFunction = <T, U>(
  item: T,
  key: string | number,
  original: T[] | { [key: string]: T }
) => U

const mapObject = <T, U>(obj: T, fn: MapFunction): U =>
  Object.entries(obj).reduce<U>(
    (newObj, [key, value]) => ({
      ...newObj,
      [key]: fn(value, key, obj),
    }),
    {} as U
  )

const map = (arrayOrObject: unknown, fn: MapFunction): unknown => {
  if (arrayOrObject === null || typeof arrayOrObject !== 'object')
    throw new Error('The first parameter must be an object or an array.')

  if (Array.isArray(arrayOrObject)) {
    return arrayOrObject.map(fn)
  }

  return mapObject(copy(arrayOrObject), fn)
}

export default map
