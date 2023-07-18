import { Dispatch, JSX, SetStateAction } from 'react'

export interface ISquare {
  children: JSX.Element | string
  board?: []
  updateBoard?: (index: number) => void
  updateTurn?: Dispatch<SetStateAction<string>>
  turn?: string
  index?: number
  isSelected?: boolean
}