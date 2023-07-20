import { VITE_BASE_IMAGES_URL } from '../utils/constants'
import { useEffect, useState } from 'react'
import { getImage } from '../api/cats'

interface IFact {
  fact: string
}

export const useCatImage = ({ fact }: { fact: string }) => {
  const [simpleUrl, setSimpleUrl] = useState('')

  const getFormattedUrl = () => `${VITE_BASE_IMAGES_URL}${simpleUrl}?size=50`

  const getFirstThreeWord = ({ fact }: IFact) => {
    const wordsArray = fact.split(' ', 3)
    const firstThreeWord = wordsArray.join(' ').toLocaleLowerCase()
    return firstThreeWord
  }

  const fetchImage = async () => {
    const firstWord = getFirstThreeWord({ fact })
    const newUrl = await getImage({ fact: firstWord })
    setSimpleUrl(newUrl)
  }

  useEffect(() => {
    fetchImage()
  }, [fact])

  return { url: getFormattedUrl() }
}
