import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMove = (event: MouseEvent) => {
    const { clientX, clientY } = event
    setPosition({ x: clientX, y: clientY })
  }

  useEffect(() => {
    if (enabled) window.addEventListener('pointermove', handleMove)

    // cleanup
    // when component dismount
    // when dependencies changes, this cleanup happens before the useEffect execute again
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <main>
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <button onClick={() => setEnabled((prev) => !prev)}>
        {enabled ? 'Disable' : 'Enable'}
      </button>
    </main>
  )
}

export default App
