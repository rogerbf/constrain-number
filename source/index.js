export const min = limit => value => value >= limit ? value : limit

export const max = limit => value => value <= limit ? value : limit

export const constrain = ({ min: lower, max: upper }) => value => {
  const lowerFn = min(lower)
  const upperFn = max(upper)
  return upperFn(lowerFn(value))
}
