import nextCellState from './nextCellState.js';
import countAliveNeighbours from './countAliveNeighbours.js';

function nextBoard(currentBoard) {
  let newBoard = [];
  for (let row = 0; row < currentBoard.length; row++) {
    let nextRow = [];
    for (let col = 0; col < currentBoard.length; col++) {
      let cell = currentBoard[row][col];
      nextRow.push(
        nextCellState(cell, countAliveNeighbours(row, col, currentBoard))
      );
    }
    newBoard.push(nextRow);
  }
  return newBoard;
}

export default nextBoard;
