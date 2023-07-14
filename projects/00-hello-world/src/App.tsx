import './App.css'
import TwitterFollowCard from './components/TwitterFollowCard'

const accounts = [
  {
    imageUrl: 'https://unavatar.io/microsoft',
    altText: 'Microsoft',
    name: 'Microsoft',
    username: 'microsoft',
    isFollowing: false
  },
  {
    imageUrl: 'https://unavatar.io/netflix',
    altText: 'Netflix',
    name: 'Netflix',
    username: 'netflix',
    isFollowing: true
  },
  {
    imageUrl: 'https://unavatar.io/apple',
    altText: 'Apple',
    name: 'Apple',
    username: 'apple',
    isFollowing: true
  },
  {
    imageUrl: 'https://unavatar.io/spotify',
    altText: 'Spotify',
    name: 'Spotify',
    username: 'spotify',
    isFollowing: false
  }
]

function App() {
  const formatUsername = (username: string) => `@${username}`

  return (
    <div className='App'>
      {accounts.map((account, index) => <TwitterFollowCard key={index} {...account} formatUsername={formatUsername}/>)}
    </div>
  )
}

export default App