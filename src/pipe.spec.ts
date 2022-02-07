import pipe from './pipe'

describe('pipe', () => {
  it('should run a numeric value through the provided functions', () => {
    const value = pipe(
      5,
      (n) => n * n,
      (n) => n - 1,
      (n) => n / 6
    )

    expect(value).toBe(4)
  })

  it('should run a string value through the provided functions', () => {
    const value = pipe(
      'h',
      (s) => s + 'ello you',
      (s) => s.slice(0, 6),
      (s) => s + 'world'
    )

    expect(value).toBe('hello world')
  })

  it('should run a string value through the provided functions', () => {
    const obj = { message: 'hello' }
    const value = pipe(
      obj,
      (o) => ({ ...o, name: 'test' }),
      (o) => ({ ...o, message: `${o.message} ${o.name}` })
    )

    expect(value).toEqual({ message: 'hello test', name: 'test' })
  })

  it('should create a copy of the value given rather than modifying the original', () => {
    const original = [1, 2, 3]
    const value = pipe(
      original,
      (a) => {
        a.push(4)
        return a
      },
      (a) => {
        a.pop()
        return a
      }
    )

    expect(value).toEqual(original)
    expect(value).not.toBe(original)
  })
})
