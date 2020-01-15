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

  switch(action.type) {
    case NEW_GAME:
      return action.game;
    case UPDATE_CELL:
      const { row, col } = action.payload;
      
      state.board[row][col] = state.currentPlayer;

      return {
        ...state,
      }
    case TOGGLE_PLAYER:
      if(state.winner !== null) 
        return state;

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
