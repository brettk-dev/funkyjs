type CurryFunction = (...args: any[]) => any
const curry = (fn: CurryFunction, args: any[] = []) =>
  fn.length === 0
    ? () => fn()
    : args.length === fn.length
    ? fn(...args)
    : (arg: any) => curry(fn, [...args, arg])

export default curry
