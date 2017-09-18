export const min = limit => value => value >= limit ? value : limit

export const max = limit => value => value <= limit ? value : limit

export const constrain = ({ min: lowerLimit, max: upperLimit }) => value => {
  const m = min(lowerLimit)
  const M = max(upperLimit)
  return M(m(value))
}
