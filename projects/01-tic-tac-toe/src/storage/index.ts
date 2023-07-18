export const saveGame = (board: [], turn: string) => {
  localStorage.setItem('savedBoard', JSON.stringify(board))
  localStorage.setItem('savedTurn', turn)
}

export const clearGame = () => {
  localStorage.removeItem('savedBoard')
  localStorage.removeItem('savedTurn')
}

export const restoreGame = () => {
  return {
    savedBoard: localStorage.getItem('savedBoard'),
    savedTurn: localStorage.getItem('savedTurn')
  }
}