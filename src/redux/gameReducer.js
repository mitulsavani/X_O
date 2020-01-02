import { NEW_GAME, UPDATE_CELL } from './actions';
import { InitialState } from './InitialState';

export const defaultState = InitialState

const gameReducer = (state = InitialState(), action) => {

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
      const togglePlayer = state.nextPlayer === 'X' ? 'O' : 'X';
      const updatedBoard = updateBoard(state.board);

      return {
        ...state,
        nextPlayer: togglePlayer,
        board: updatedBoard,
      }
    default:
      return state;
  }
}

export default gameReducer;
