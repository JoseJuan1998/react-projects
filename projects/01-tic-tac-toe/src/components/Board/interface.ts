import { Dispatch, SetStateAction } from 'react'

export interface IBoard {
  board: []
  setBoard: Dispatch<SetStateAction<[]>>
  turn: string
  setTurn: Dispatch<SetStateAction<string>>
  setWinner: Dispatch<SetStateAction<string | boolean | null>>
}