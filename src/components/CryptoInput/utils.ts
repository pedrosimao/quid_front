export const fetchFiatValue = async (): Promise<number> => {
  const response = await fetch(`https://near-contract-helper.onrender.com/fiat`)
  const data = await response.json()
  return Number(data?.near.usd)
}
