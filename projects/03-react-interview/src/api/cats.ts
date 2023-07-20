import { VITE_BASE_IMAGES_URL } from '../utils/constants'

export const getImage = async ({ fact }: { fact: string }) => {
  const res = await fetch(`${VITE_BASE_IMAGES_URL}/cat/says/${fact}?size=50&json=true`)
  const { url } = await res.json()
  return url
}
