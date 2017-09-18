import { lowerLimit, upperLimit, limit } from "../source/index"

describe(`lowerLimit`, () => {
  it(`is a function`, () => {
    expect(typeof lowerLimit).toEqual(`function`)
  })

  it(`returns a function`, () => {
    expect(typeof lowerLimit(0)).toEqual(`function`)
  })

  it(`returns the expected output`, () => {
    const limiter = lowerLimit(10)
    const expected = 10
    const actual = limiter(5)
    expect(actual).toEqual(expected)
  })

  it(`returns the expected output`, () => {
    const limiter = lowerLimit(10)
    const expected = 11
    const actual = limiter(11)
    expect(actual).toEqual(expected)
  })
})

describe(`upperLimit`, () => {
  it(`is a function`, () => {
    expect(typeof upperLimit).toEqual(`function`)
  })

  it(`returns a function`, () => {
    expect(typeof upperLimit(0)).toEqual(`function`)
  })

  it(`returns the expected output`, () => {
    const limiter = upperLimit(10)
    const expected = 10
    const actual = limiter(11)
    expect(actual).toEqual(expected)
  })

  it(`returns the expected output`, () => {
    const limiter = upperLimit(20)
    const expected = 11
    const actual = limiter(11)
    expect(actual).toEqual(expected)
  })
})

describe(`limit`, () => {
  it(`is a function`, () => {
    expect(typeof limit).toEqual(`function`)
  })

  it(`returns a function`, () => {
    expect(typeof limit({ min: 0, max: 1 })).toEqual(`function`)
  })

  it(`returns the expected output`, () => {
    const limiter = limit({ min: 10, max: 100 })
    const expected = 20
    const actual = limiter(20)
    expect(actual).toEqual(expected)
  })

  it(`returns the expected output`, () => {
    const limiter = limit({ min: 10, max: 100 })
    const expected = 10
    const actual = limiter(5)
    expect(actual).toEqual(expected)
  })

  it(`returns the expected output`, () => {
    const limiter = limit({ min: 10, max: 100 })
    const expected = 100
    const actual = limiter(110)
    expect(actual).toEqual(expected)
  })
})
