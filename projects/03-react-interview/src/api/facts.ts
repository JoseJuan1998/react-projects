import { VITE_BASE_FACTS_URL } from '../utils/constants'

export const getFact = async () => {
  const res = await fetch(VITE_BASE_FACTS_URL)
  const { fact } = await res.json()
  return fact
}