export const InitialState = () => ({
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ],
  winner: null,
  currentPlayer: 'X',
  gameOver: false,
});
