import copy from './copy'

describe('copy', () => {
  it('should create a new copy of an object', () => {
    const original = { one: 1 }
    const value = copy(original)

    expect(value).not.toBe(original)
    expect(value).toEqual(original)
  })

  it('should create a new copy of an array', () => {
    const original = [1, 2, 3]
    const value = copy(original)

    expect(value).not.toBe(original)
    expect(value).toEqual(original)
  })

  it('should create a new deep copy of an object', () => {
    const original = { one: { two: 3 } }
    const value = copy(original)

    expect(value.one).not.toBe(original.one)
    expect(value).toEqual(original)
  })

  it('should create a new deep copy of an array', () => {
    const original = [{ one: 1 }]
    const value = copy(original)

    expect(value[0]).not.toBe(original[0])
    expect(value).toEqual(original)
  })

  it('should handle primitive times as well', () => {
    const num = 5
    const str = 'five'

    const valueNum = copy(num)
    const valueStr = copy(str)

    expect(valueNum).toBe(5)
    expect(valueStr).toBe('five')
  })
})
