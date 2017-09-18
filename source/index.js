export const lowerLimit = limit => value => value >= limit ? value : limit

export const upperLimit = limit => value => value <= limit ? value : limit

export const limit = ({ min, max }) => value => {
  const lower = lowerLimit(min)
  const upper = upperLimit(max)
  return upper(lower(value))
}
