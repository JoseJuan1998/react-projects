import confetti from 'canvas-confetti'
import { checkWinner } from '../../logic/board'
import { TURNS } from '../../utils/constants'
import Square from '../Square'
import { IBoard } from './interface'
import { saveGame } from '../../storage'

const Board = ({ board, setBoard, turn, setTurn, setWinner }: IBoard) => {
  const updateBoard = (index: number) => {
    if (board[index]) return

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const newBoard: [] = [...board]
    newBoard[index] = turn as never
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setBoard(newBoard)
    setTurn(newTurn)
    saveGame(newBoard, newTurn)
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
        ?.then(() => console.log(''))
        .catch(() => console.log(''))
      return setWinner(newWinner)
    }
    if (newBoard.indexOf(null as never) === -1) {
      return setWinner(false)
    }
  }

  return (
    <section className='game'>
      {board.map((square, index) => {
        return (
          <Square
            key={index}
            index={index}
            updateBoard={updateBoard}
            updateTurn={setTurn}
            turn={turn}>
            {square}
          </Square>
        )
      })}
    </section>
  )
}

export default Board
