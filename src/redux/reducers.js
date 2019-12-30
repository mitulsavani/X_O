import * as types from './types';

const emptyBoard = () => [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]

const boardReducer = (state = [[]], action) => {
  switch(action.type) {
    case types.NEW_GAME:
      return emptyBoard();
    default:
      return state;
  }
}

export default boardReducer
