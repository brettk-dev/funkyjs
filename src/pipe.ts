import copy from './copy'

type PipeCallback = (...args: any[]) => any

const pipe = <T>(value: T, ...fns: PipeCallback[]) =>
  fns.reduce((output, fn) => fn(copy<T>(output)), value)

export default pipe
