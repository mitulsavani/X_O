import { NEW_GAME, UPDATE_CELL, TOGGLE_PLAYER, CHECK_WINNER } from './actions';
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

  const checkWinner = (board, nextPlayer) => {
    return winningPatterns.some(pattern => pattern.every(cell => {
      const { r, c } = cell;

      return board[r][c] === nextPlayer;
    }));
  }

  const updateBoard = (currentBoard) => {
  
    const newBoard = [
      [currentBoard[0][0], currentBoard[0][1], currentBoard[0][2]],
      [currentBoard[1][0], currentBoard[1][1], currentBoard[1][2]],
      [currentBoard[2][0], currentBoard[2][1], currentBoard[2][2]]
    ]

    newBoard[action.payload.row][action.payload.col] = state.nextPlayer;

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
      const togglePlayer = state.nextPlayer === 'X' ? 'O' : 'X';

      return {
        ...state,
        nextPlayer: togglePlayer,
      }
    case CHECK_WINNER:
      const result = checkWinner(state.board, state.nextPlayer);

      let gameOver;
      if(result === true)
        gameOver = true;
      else
        gameOver = false;

      return {
        ...state,
        gameOver: gameOver,
      }
    default:
      return state;
  }
}

export default gameReducer;
