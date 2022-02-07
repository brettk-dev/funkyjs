import map from './map'

describe('map', () => {
  it('should apply the function to each element creating a new array', () => {
    const original = [1, 2, 3]
    const value = map(original, (n) => n * 2)

    expect(original).toEqual([1, 2, 3])
    expect(value).not.toBe(original)
    expect(value).toEqual([2, 4, 6])
  })

  it('should apply the function to each key creating a new object', () => {
    const original = { one: 0, two: 1, three: 2 }
    const value = map(original, (n) => n + 1)

    expect(original).toEqual({ one: 0, two: 1, three: 2 })
    expect(value).not.toBe(original)
    expect(value).toEqual({ one: 1, two: 2, three: 3 })
  })
})
