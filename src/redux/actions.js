import { InitialState } from "./InitialState";

export const NEW_GAME = 'NEW_GAME';

export const newGame = () => (dispatch) => {
  dispatch({
    type: NEW_GAME,
    game: InitialState()
  });
};
