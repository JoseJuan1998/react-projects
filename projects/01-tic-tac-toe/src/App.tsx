import { useState } from 'react'
import './App.css'
import { TURNS, initialBoard } from './utils/constants'
import WinnerModal from './components/WinnerModal'
import Board from './components/Board'
import Turn from './components/Turn'
import { clearGame, restoreGame } from './storage'

function App() {
  const [board, setBoard] = useState<[]>(() => {
    const { savedBoard } = restoreGame()
    if (savedBoard) return JSON.parse(savedBoard) as []
    return initialBoard as []
  })
  const [turn, setTurn] = useState(() => {
    const { savedTurn } = restoreGame()
    return savedTurn ?? TURNS.O
  })
  const [winner, setWinner] = useState<string | null | boolean>(null)

  const restartGame = () => {
    setBoard(initialBoard as [])
    setTurn(TURNS.O)
    setWinner(null)
    clearGame()
  }

  return (
    <main className='board'>
      <h1>Tic-Tac-Toe</h1>
      <button onClick={restartGame}>Reset Game</button>
      <Board
        board={board}
        setBoard={setBoard}
        turn={turn}
        setTurn={setTurn}
        setWinner={setWinner}
      />
      <Turn turn={turn} />
      <WinnerModal
        winner={winner}
        restartGame={restartGame}
      />
    </main>
  )
}

export default App
