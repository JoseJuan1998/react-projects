import Square from '../Square'
import { IWinnerModal } from './interface'

const WinnerModal = ({ winner, restartGame }: IWinnerModal) => {
  if (winner === null) return null
  
  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winner === false ? 'Tie' : 'Winner'}</h2>

        {winner && (
          <header className='win'>
            <Square>{winner as string}</Square>
          </header>
        )}

        <footer>
          <button onClick={restartGame}>Play again</button>
        </footer>
      </div>
    </section>
  )
}

export default WinnerModal
