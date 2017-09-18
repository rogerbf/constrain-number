import { min, max, constrain } from "../source/index"

describe(`min`, () => {
  it(`is a function`, () => {
    expect(typeof min).toEqual(`function`)
  })

  it(`returns a function`, () => {
    expect(typeof min(0)).toEqual(`function`)
  })

  it(`returns the expected output`, () => {
    const limiter = min(10)
    const expected = 10
    const actual = limiter(5)
    expect(actual).toEqual(expected)
  })

  it(`returns the expected output`, () => {
    const limiter = min(10)
    const expected = 11
    const actual = limiter(11)
    expect(actual).toEqual(expected)
  })
})

describe(`max`, () => {
  it(`is a function`, () => {
    expect(typeof max).toEqual(`function`)
  })

  it(`returns a function`, () => {
    expect(typeof max(0)).toEqual(`function`)
  })

  it(`returns the expected output`, () => {
    const limiter = max(10)
    const expected = 10
    const actual = limiter(11)
    expect(actual).toEqual(expected)
  })

  it(`returns the expected output`, () => {
    const limiter = max(20)
    const expected = 11
    const actual = limiter(11)
    expect(actual).toEqual(expected)
  })
})

describe(`constrain`, () => {
  it(`is a function`, () => {
    expect(typeof constrain).toEqual(`function`)
  })

  it(`returns a function`, () => {
    expect(typeof constrain({ min: 0, max: 1 })).toEqual(`function`)
  })

  it(`returns the expected output`, () => {
    const limiter = constrain({ min: 10, max: 100 })
    const expected = 20
    const actual = limiter(20)
    expect(actual).toEqual(expected)
  })

  it(`returns the expected output`, () => {
    const limiter = constrain({ min: 10, max: 100 })
    const expected = 10
    const actual = limiter(5)
    expect(actual).toEqual(expected)
  })

  it(`returns the expected output`, () => {
    const limiter = constrain({ min: 10, max: 100 })
    const expected = 100
    const actual = limiter(110)
    expect(actual).toEqual(expected)
  })
})
