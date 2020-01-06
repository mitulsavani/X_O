# Tic Tac Toe - X_O

Welcome to Tic Tac Toe mobile application game, built with React Native.

## Table of Contents

- Overview
- Demo
- Getting Started
    - [ Installation ](#installation)
- Game
    - [ Project Structure ](#project-structure)
    - [ Custom components ](#custom-components)
    - [ Screen & Navigation ](#screen-navigation)
    - Redux
        - Store
        - Actions
        - Reducers
- Algorithms Explanation
    - Check Winner
    - Check Draw
    - Alert
    - Player Click on board
    - Toggle/Alternate Player Turn
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

This project was initiated using [ Expo CLI Quickstart ](https://facebook.github.io/react-native/docs/getting-started).

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
             |__ Board.js
             |__ Button.js
             |__ Cell.js
             |__ Player.js
```

### Custom components

The following components were built to complete the GameScreen:

*  `Board` which renders the grid background
*  `Cell` are used by Board to render 9 squares which finishes our 3x3 grid
*  `Button` is used by Cell to render the value( X / O / null ) of that cell
*  `Player` to indicate players turn

All custom custom components have a set of props which I am validating using [Prop-Types](https://github.com/facebook/prop-types).

### Screen & Navigation

The game have one screen called as `GameScreen`. I was intitally thinking to make multiple screens for this game, but I did not see a point in doing because that would only increase the number of clicks from users to reach up to the main `GameScreen` and the navigation was aquired using [react navigation](https://reactnavigation.org/).

