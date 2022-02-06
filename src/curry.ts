const curry = (fn, args = []) =>
  fn.length === 0
    ? () => fn()
    : args.length === fn.length
    ? fn(...args)
    : (arg) => curry(fn, [...args, arg])

export default curry
