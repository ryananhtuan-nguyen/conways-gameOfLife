import isOutOfBounds from './isOutOfBounds.js'

function indicesAreOutOfBounds(rowIndex, columnIndex, board) {
  return isOutOfBounds(rowIndex, board) || isOutOfBounds(columnIndex, board)
}

export default indicesAreOutOfBounds
