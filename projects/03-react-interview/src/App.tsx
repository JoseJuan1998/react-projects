import './App.css'
import { useFact } from './hooks/useFact'
import { useCatImage } from './hooks/useCatImage'

export const App = () => {
  const { fact, refresh } = useFact()
  const { url } = useCatImage({ fact })

  return (
    <main>
      <h1>Cats App</h1>
      <button onClick={refresh}>Fetch another</button>
      {fact && <p>{fact}</p>}
      {url && <img src={url} alt={`cat saying ${fact}`} />}
    </main>
  )
}
