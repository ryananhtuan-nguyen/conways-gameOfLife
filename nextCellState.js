import isOverPopulated from './isOverPopulated.js'
import isUnderPopulated from './isUnderPopulated.js'
import isRessurectable from './isRessurectable.js'

function nextCellState(cellState, neighbourCount) {
  if (cellState == true) {
    if (isOverPopulated(neighbourCount) || isUnderPopulated(neighbourCount)) {
      return false
    } else {
      return true
    }
  }
  if (cellState == false && isRessurectable(neighbourCount)) {
    return true
  } else {
    return false
  }
}

export default nextCellState

console.log(nextCellState(false, 2))
