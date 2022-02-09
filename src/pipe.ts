import copy from './copy'

type PipeCallback = (...args: unknown[]) => unknown

const pipe = (value: unknown, ...fns: PipeCallback[]) =>
  fns.reduce((output, fn) => fn(copy(output)), value)

export default pipe
