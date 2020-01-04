import { NEW_GAME, UPDATE_CELL, TOGGLE_PLAYER, CHECK_GAME_OVER } from './actions';
import { InitialState } from './InitialState';

export const defaultState = InitialState();

const gameReducer = (state = defaultState, action) => {

  const winningPatterns = [
    // Horizontals
    [{ r: 0, c: 0 }, { r: 0, c: 1 }, { r: 0, c: 2 }],
    [{ r: 1, c: 0 }, { r: 1, c: 1 }, { r: 1, c: 2 }],
    [{ r: 2, c: 0 }, { r: 2, c: 1 }, { r: 2, c: 2 }],
  
    // Verticals
    [{ r: 0, c: 0 }, { r: 1, c: 0 }, { r: 2, c: 0 }],
    [{ r: 0, c: 1 }, { r: 1, c: 1 }, { r: 2, c: 1 }],
    [{ r: 0, c: 2 }, { r: 1, c: 2 }, { r: 2, c: 2 }],

    // Diagonals
    [{ r: 0, c: 0 }, { r: 1, c: 1 }, { r: 2, c: 2 }],
    [{ r: 0, c: 2 }, { r: 1, c: 1 }, { r: 2, c: 0 }],
  ];

  const checkWinner = (board) => {

    return winningPatterns.some(pattern => pattern.every(cell => {
      const { r, c } = cell;

      return board[r][c] === state.currentPlayer;
    }));
  }

  const isBoardFull = (board) => {

    const notFull = board.some(row => row.some(col => col === null));
  
    return !notFull;
  }

  const checkGameOver = (board) => {
    if(checkWinner(board)) {
      return state.currentPlayer;
    }
    if(isBoardFull(board)) {
      return null;
    }
    return false;
  }

  const updateBoard = (currentBoard) => {
    const { row, col } = action.payload;
  
    const newBoard = [
      [currentBoard[0][0], currentBoard[0][1], currentBoard[0][2]],
      [currentBoard[1][0], currentBoard[1][1], currentBoard[1][2]],
      [currentBoard[2][0], currentBoard[2][1], currentBoard[2][2]]
    ]

    newBoard[row][col] = state.currentPlayer;

    return newBoard;
  }

  switch(action.type) {
    case NEW_GAME:
      return action.game;
    case UPDATE_CELL:
      const updatedBoard = updateBoard(state.board);

      return {
        ...state,
        board: updatedBoard,
      }
    case TOGGLE_PLAYER:
      const nextPlayer = state.currentPlayer === 'X' ? 'O' : 'X';

      return {
        ...state,
        currentPlayer: nextPlayer,
      }
    case CHECK_GAME_OVER:
      const result = checkGameOver(state.board);

      let winner;
      let gameOver;
      if(result === false) {
        winner = null;
        gameOver = false;
      } else {
        winner = result;
        gameOver = true;
      }

      return {
        ...state,
        winner: winner,
        gameOver: gameOver,
      }
    default:
      return state;
  }
}

export default gameReducer;
