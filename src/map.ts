import copy from './copy'

type MapFunction = (
  item: any,
  indexOrKey: number | string,
  arrayOrObject: any
) => any[]

const mapObject = (obj: object, fn: MapFunction) =>
  Object.entries(obj).reduce(
    (newObj, [key, value]) => ({
      ...newObj,
      [key]: fn(value, key, obj),
    }),
    {}
  )

const map = (arrayOrObject: any[] | object, fn: MapFunction) =>
  Array.isArray(arrayOrObject)
    ? copy(arrayOrObject).map(fn)
    : mapObject(copy(arrayOrObject), fn)

export default map
