import getNeighbours from './getNeighbours.js'

function countAliveNeighbours(cellRow, cellColumn, board) {
  let count = 0
  let neighbour = getNeighbours(cellRow, cellColumn, board)
  for (const banana of neighbour) {
    if (banana == true) count++
  }
  return count
}

export default countAliveNeighbours
