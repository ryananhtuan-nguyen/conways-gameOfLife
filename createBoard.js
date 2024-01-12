function createBoard(size, blank) {
  let board = [];
  const rows = Array(size).fill(false);

  rows.forEach(() => {
    const cols = Array(size).fill(blank ? false : Math.random() > 0.5);
    board.push(cols);
  });
  return board;
}

export default createBoard;
