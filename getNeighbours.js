import indicesAreOutOfBounds from './indicesAreOutOfBounds.js'

function getNeighbours(cellRow, cellColumn, board) {
  let index = []
  for (let i = cellRow - 1; i < cellRow + 2; i++) {
    for (let j = cellColumn - 1; j < cellColumn + 2; j++) {
      if (i < 0 || j < 0) {
        continue
      } else if (indicesAreOutOfBounds(i, j, board)) {
        continue
      } else if (i == cellRow && j == cellColumn) {
        continue
      } else {
        index.push(board[i][j])
      }
    }
  }

  return index
}

export default getNeighbours
