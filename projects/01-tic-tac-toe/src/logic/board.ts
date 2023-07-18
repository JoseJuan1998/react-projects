import { winningCombinations } from '../utils/constants'

export const checkWinner = (boardToCheck: []) => {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination

    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[b] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }

  return null
}