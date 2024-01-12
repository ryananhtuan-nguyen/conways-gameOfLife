import { gliderGunCoordinates, initialCoordinates } from './constants.js';
import createBoard from './createBoard.js';
import nextBoard from './nextBoard.js';

// Function to create the HTML table and attach each element of the board to a corresponding cell
function createTable(board) {
  const table = document.getElementById('board');
  table.innerHTML = '';

  for (let row = 0; row < board.length; row++) {
    const tr = document.createElement('tr');
    for (let col = 0; col < board.length; col++) {
      const td = document.createElement('td');
      td.setAttribute('data-row', row);
      td.setAttribute('data-col', col);
      td.classList.add(board[row][col] ? 'alive' : 'dead');
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

// Function to update the table with the next state of the board
function updateTable(board) {
  const table = document.getElementById('board');
  const cells = table.querySelectorAll('td');
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      const cell = cells[row * board.length + col];
      cell.classList.remove('alive', 'dead');
      cell.classList.add(board[row][col] ? 'alive' : 'dead');
    }
  }
}

// Initialize the board and start the game
let running = false;
let token;
//set up init board
let currentBoard = createBoard(40, false);

//function to start game
function startGame() {
  if (!running) {
    running = true;
    token = setInterval(runGame, 100);
  }
}
// function to stop game
function stopGame() {
  running = false;
  clearInterval(token);
}

//function to run the game, update values, clear board
function runGame() {
  currentBoard = nextBoard(currentBoard);
  updateTable(currentBoard);
}

function changePattern(pat) {
  currentBoard = createBoard(40, true);
  switch (pat) {
    case 'gliderGuns':
      gliderGunCoordinates.forEach(([x, y]) => (currentBoard[x][y] = true));
      updateTable(currentBoard);
      return;
    case 'init':
      initialCoordinates.forEach(([x, y]) => (currentBoard[x][y] = true));
      updateTable(currentBoard);
      return;
  }
}

createTable(currentBoard);

let startButton = document.getElementById('start');
startButton.onclick = startGame;
let stopButton = document.getElementById('stop');
stopButton.onclick = stopGame;
let gliderGuns = document.getElementById('gliderGuns');
gliderGuns.addEventListener('click', () => changePattern('gliderGuns'));
let initButton = document.getElementById('init');
initButton.addEventListener('click', () => changePattern('init'));
