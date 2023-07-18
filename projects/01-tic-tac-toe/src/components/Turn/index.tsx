import Square from '../Square'
import { TURNS } from '../../utils/constants'
import { ITurn } from './interface'

const Turn = ({ turn }: ITurn) => {
  return (
    <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          <span>{TURNS.X}</span>
        </Square>
        <Square isSelected={turn === TURNS.O}>
          <span>{TURNS.O}</span>
        </Square>
      </section>
  )
}

export default Turn