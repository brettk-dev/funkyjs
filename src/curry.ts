type CurryFunction = (...args: unknown[]) => unknown

const curry = (fn: CurryFunction, args: unknown[] = []) =>
  fn.length === 0
    ? () => fn()
    : args.length === fn.length
    ? fn(...args)
    : (arg: unknown) => curry(fn, [...args, arg])

export default curry
