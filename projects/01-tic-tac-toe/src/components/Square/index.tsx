import { ISquare } from './interface'

const Square = ({ children, updateBoard, index, isSelected }: ISquare) => {
  return (
    <div
      className={`square ${isSelected ? 'is-selected' : ''}`}
      onClick={() =>
        index !== undefined && updateBoard ? updateBoard(index) : null
      }
    >
      {children}
    </div>
  )
}

export default Square