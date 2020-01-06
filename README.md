# Tic Tac Toe - X_O

Welcome to Tic Tac Toe mobile application game, built with React Native.

## Table of Contents

- [ Overview ](#overview)
- Demo
- [ Getting Started ](#getting-started)
    - [ Installation ](#installation)
- [ Game ](#game)
    - [ Project Structure ](#project-structure)
    - [ Custom components ](#custom-components)
    - [ Screen & Navigation ](#screen--navigation)
    - [ Redux ](#redux)
        - [ State ](#state) 
        - [ Actions ](#actions)
        - [ Reducer ](#reducer)
- [ Algorithms Explanation ](#algorithm-explanation)
    - [ Update Board ](#update-board)
    - [ Check Winner / Game Draw ](#check-winner--game-draw)
    - [ Toggle/Alternate Player Turn ](#toggle-player-turn)
    - Alert
  
- Future Ideas
    - Player vs CPU
- License

## Overview

This is a Tic Tac Toe mobile application game where 2 players can play at the same time on a 3x3 grid. The app is built in [react native](https://facebook.github.io/react-native/) framework and uses [redux](https://redux.js.org/) for the state management of the game. 

### Functionality

- It allows 2 players to play tic tac toe
- The game have 3x3 grid on which the players can play
- The game screen will give indication on players turn
- Game recognizes when a player has won and declare that player as victorious, or declares a tied game if nobody has won the game.
- It allows the user to start a new game after every game

## Getting Started 

### Installation
```
git clone https://github.com/mitulsavani/X_O.git
yarn install
yarn run ios 
yarn run android
```

This project was bootstrapped with [ Expo CLI Quickstart ](https://facebook.github.io/react-native/docs/getting-started).

Note: I could have initiated this project using React Native CLI for more flexibility on native side. However, I decided to use Expo CLI because I knew before hand that this application is a compartively small demo application which would not require much third party libraries.

## Game

### Project Structure 

```
X_O
|__ App.js
|__ package.json
|__ README.md
|__ .eslintrc.json
|__ .gitignore
|__ assests
|   |__ p1.png
|   |__ p2.png
|__ src
     |__ components
     |   |__ Board.js
     |   |__ Button.js
     |   |__ Cell.js
     |   |__ Player.js
     |__ navigation
     |   |__ RootNavigator.js
     |__ redux
     |   |__ actions.js
     |   |__ gameReducer.js
     |   |__ InitialState.js
     |   |__ root.reducer.js
     |   |__ store.js
     |__ screens
     |   |__ GameScreen.js
     |__ styles
         |__ colors.js
         |__ GameScreenStyles.js
         |__ components
             |__ BoardStyles.js
             |__ ButtonStyles.js
             |__ CellStyles.js
             |__ PlayerStyles.js
```

### Custom components

The following components were built to complete the GameScreen:

*  `Board` which renders the grid background
*  `Cell` are used by Board to render 9 squares which finishes our 3x3 grid
*  `Button` is used by Cell to render the value( X / O / null ) of that cell
*  `Player` to indicate players turn

All custom custom components have a set of props which I am validating using [Prop-Types](https://github.com/facebook/prop-types).

### Screen & Navigation

The game have one screen called as `GameScreen`. I was intitally thinking to make multiple screens for this game, but I did not see a point in doing because that would only increase users clicks to reach up to the main `GameScreen` and the navigation was aquired using [react navigation](https://reactnavigation.org/).

## Redux

### State

```jsx
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
```

### Actions

* `NEW_GAME` will be dispatched in 2 scenarios; when users open up an application which returns the Initial_State, and when users clicks on the resets game button
of the alert. This alert is rendered when game declares the draw/winner of the game.
* `UPDATE_CELL` will be dispatched when users clicks on one of the 9 cells of the board. This updates the value of that cell.
* `TOGGLE_PLAYER` will be dispatched to alter players turn.
* `CHECK_GAME_OVER` will be dispatched to check whether player have won the game.

```jsx
export const NEW_GAME = 'NEW_GAME';
export const UPDATE_CELL = 'UPDATE_CELL';
export const TOGGLE_PLAYER = 'TOGGLE_PLAYER';
export const CHECK_GAME_OVER = 'CHECK_GAME_OVER';
```

### Reducer

The application have one reducer named as `gameReducer.js` which is responsible to return the updated state.


## Algorithms Explanation

### Update Board

From GameScreen.js : <br>
I am fetching the  `rowIndex` and `colIndex` of the cell that user clicks from the  component props and then dispatching `UPDATE_CELL` action with the payload( rowIndex and colIndex). 

From gameReducer.js : <br>
Then, I am making a copy of our `currentBoard` and changing the value of that cell with the `currentPlayer ('X' or 'O')` and returning the `newBoard`.

```jsx
const updateBoard = (currentBoard) => {
  const { row, col } = action.payload;

  const newBoard = [
    [currentBoard[0][0], currentBoard[0][1], currentBoard[0][2]],
    [currentBoard[1][0], currentBoard[1][1], currentBoard[1][2]],
    [currentBoard[2][0], currentBoard[2][1], currentBoard[2][2]]
  ]

  newBoard[row][col] = state.currentPlayer;

  return newBoard;
}
```

Then we will update our state with the newBoard:
```jsx
case UPDATE_CELL:
const updatedBoard = updateBoard(state.board);

return {
  ...state,
  board: updatedBoard,
}
```
### Check Winner / Game Draw

From gameReducer.js: <br>

There are in total of 8 ways a player can win this game on 3x3 board. let's look at those patterns: 
```jsx
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
```
<br>

The function checks if the  `currentPlayer` value matches with all the three positons of a single combination of the winningPatterns. 
```jsx
const checkWinner = (board) => {

  return winningPatterns.some(pattern => pattern.every(cell => {
    const { r, c } = cell;

    return board[r][c] === state.currentPlayer;
  }));
}
```
<br>

The function checks if our current board is full or not.
```jsx
const isBoardFull = (board) => {

  const notFull = board.some(row => row.some(col => col === null));

  return !notFull;
}
```
<br>

The function checks whether a player has won or if the game is draw ? By the end of the game, if all cell values are filled up and no player value have matched with one of the winning patters then the game will be considered as draw.

Note: I am aware that the function returns three different kind of values (string, null, booleans). I think that this is considered as bad practice would definitely optimize this later. 

```jsx
const checkGameOver = (board) => {
  if(checkWinner(board)) {
    return state.currentPlayer;
  }
  if(isBoardFull(board)) {
    return null;
  }
  return false;
}
```

### Toggle Player Turn

From gameReducer: <br>

I am doing 2 things here; Firstly, check if winner is already declared, if so then there is no point in altering player because game is over! Ortherwise, alter the player.
```jsx
case TOGGLE_PLAYER:
if(state.winner !== null) 
  return state;

const nextPlayer = state.currentPlayer === 'X' ? 'O' : 'X';

return {
  ...state,
  currentPlayer: nextPlayer,
}
```
