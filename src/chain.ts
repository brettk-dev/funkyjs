type ChainCallback = (...args: any[]) => any

type FunkyChain = (value: any) => {
  value: any
  pipe: (cb: ChainCallback, ...args: any[]) => any
  effect: (cb: ChainCallback, ...args: any[]) => any
}

const chain: FunkyChain = (value) => {
  Object.freeze(value)
  return {
    value,
    pipe: (cb, ...args) => chain(cb(value, ...args)),
    effect: (cb, ...args) => {
      cb(value, ...args)
      return chain(value)
    },
  }
}

export default chain
