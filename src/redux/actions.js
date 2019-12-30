import * as types from './types';

const newGame = () => ({
  type: types.NEW_GAME
});

const gameOver = () => ({
  type: types.GAME_OVER
});

export {
  newGame,
  gameOver,
}
