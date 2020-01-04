import { InitialState } from "./InitialState";

export const NEW_GAME = 'NEW_GAME';
export const UPDATE_CELL = 'UPDATE_CELL';
export const TOGGLE_PLAYER = 'TOGGLE_PLAYER';
export const CHECK_GAME_OVER = 'CHECK_GAME_OVER';

export const newGame = () => (dispatch) => {
  dispatch({
    type: NEW_GAME,
    game: InitialState()
  });
};

export const updateCell = (rowIndex, colIndex) => (dispatch) => {
  dispatch({
    type: UPDATE_CELL,
    payload: {row: rowIndex, col: colIndex}
  })
};

export const togglePlayer = () => (dispatch) => {
  dispatch({
    type: TOGGLE_PLAYER,
  });
};

export const checkGameOver = () => (dispatch) => {
  dispatch({
    type: CHECK_GAME_OVER,
  });
};
