import curry from './curry'

describe('curry', () => {
  it('should convert a simple add function', () => {
    const curried = curry((a, b) => a + b)

    expect(curried(1)(1)).toBe(2)
  })

  it('should convert a function without arguments', () => {
    const curried = curry(() => 'test')

    expect(curried()).toBe('test')
  })

  it('should convert a function where the argument order matters', () => {
    const curried = curry((a, b) => a - b)

    expect(curried(3)(1)).toBe(2)
  })
})
