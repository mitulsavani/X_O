export const InitialState = () => ({
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ],
  newBoard: null,
  winner: null,
  nextPlayer: 'X',
  gameOver: false,
});
