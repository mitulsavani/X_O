import { NEW_GAME } from './actions';
import { InitialState } from './InitialState';

export const defaultState = InitialState
const gameReducer = (state = InitialState(), action) => {
  switch(action.type) {
    case NEW_GAME:
      return action.game;
    default:
      return state;
  }
}

export default gameReducer;
