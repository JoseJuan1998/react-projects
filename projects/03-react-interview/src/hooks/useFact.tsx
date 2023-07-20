import { useEffect, useState } from 'react'
import { getFact } from '../api/facts'

export const useFact = () => {
  const [fact, setFact] = useState('')

  const fetchFact = async () => {
    const newFact = await getFact()
    setFact(newFact)
  }
  
  useEffect(() => {
    fetchFact()
  }, [])

  return { fact, refresh: fetchFact }
}