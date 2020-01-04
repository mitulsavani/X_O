export const InitialState = () => ({
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ],
  winner: null,
  nextPlayer: 'X',
  gameOver: false,
});
