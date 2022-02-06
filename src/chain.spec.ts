import chain from './chain'

describe('chain', () => {
  it('should provide the initial value on the `value` property', () => {
    const value = chain(1234).value

    expect(value).toBe(1234)
  })

  it('should provide a `pipe` function that modifies the value', () => {
    const value = chain(1234).pipe((v) => v + 1).value

    expect(value).toBe(1235)
  })

  it('should provide an `effect` function that does not modify the value', () => {
    const value = chain(1234).effect((v) => v + 1).value

    expect(value).toBe(1234)
  })

  it('should not allow the callback to modify the value in place', () => {
    expect(() => {
      chain({ n: 1 }).effect((v) => (v.n += 1)).value
    }).toThrow()
  })

  it('should return `undefined` when the pipe callback returns undefined', () => {
    const value = chain(1234).pipe(() => undefined).value

    expect(value).toBe(undefined)
  })

  it('should return `null` when the pipe callback returns null', () => {
    const value = chain(1234).pipe(() => null).value

    expect(value).toBe(null)
  })
})
