// Always return a number (avoid NaN)
export const toNumber = (value: unknown): number => {
  if (value && typeof value === 'number') {
    return value
  }
  if (value && typeof value === 'string') {
    return Number(value) || 0
  }
  return 0
}
