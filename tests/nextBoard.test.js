import { test, expect } from 'vitest'

import createBoard from '../createBoard'
import nextBoard from '../nextBoard'

test('nextBoard is not equal to createBoard', () => {
  const board = createBoard(10)
  const newBoard = nextBoard(board)
  expect(newBoard).not.toBe(board)
})

test('nextBoard cell dies from under population', () => {
  const board = createBoard(10)
  board[0][0] = true
  board[0][1] = false
  board[1][0] = false
  board[1][1] = false
  const newBoard = nextBoard(board)
  expect(newBoard[0][0]).toBeFalsy()
})

test('nextBoard cells persist', () => {
  const board = createBoard(10)
  //add more conditions so test run properly
  //since the board is generated randomly
  //setting all values to false first
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      board[i][j] = false
    }
  }
  board[1][1] = true
  board[1][2] = true
  board[2][1] = true
  board[2][2] = true

  const newBoard = nextBoard(board)

  expect(newBoard[2][2]).toBeTruthy()
  expect(newBoard[1][1]).toBeTruthy()
  expect(newBoard[2][1]).toBeTruthy()
  expect(newBoard[1][2]).toBeTruthy()
})

test('nextBoard cells become alive', () => {
  const board = createBoard(10)
  //also add more conditions so test run properly
  //since the board is generated randomly
  //setting all values to false first
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      board[i][j] = false
    }
  }

  board[0][0] = true
  board[0][1] = true
  board[1][0] = true

  const newBoard = nextBoard(board)

  expect(newBoard[1][1]).toBeTruthy()
})
