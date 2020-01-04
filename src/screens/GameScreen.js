import React, { Component } from 'react';
import {
  View,
  Text,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import { newGame, updateCell, togglePlayer, checkGameOver } from '../redux/actions';
import Board from '../components/Board';
import Player  from '../components/Player';
import GameScreenStyles from '../styles/GameScreenStyles';


class GameScreen extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  componentDidMount() {
    this.resetGame();
  }

  handleClick(rowIndex, colIndex) {
    
    this.props.updateCell(rowIndex, colIndex);
    this.props.checkGameOver();
    this.props.togglePlayer();
  }

  resetGame() {
    this.props.newGame();
  }

  renderHeading = () => {
    return(
      <View style={GameScreenStyles.headingContainer}>
        <Text style={GameScreenStyles.headingStyle}>
          Tic Tac Toe
        </Text>
        <View style={GameScreenStyles.headingLine}/>
      </View>
    );
  }

  renderPlayersCard = () => {
    const { game } = this.props
    const { currentPlayer } = game;

    return(
      <View style={GameScreenStyles.playerContainer}>
        <Player
          title="Atavus"
          iconName="cross"
          playerImage="p1"
          currentPlayer={currentPlayer === 'X' ? true : false}
        />
        <Player
          title="Kimera"
          iconName="circle"
          playerImage="p2"
          currentPlayer={currentPlayer === 'O' ? true : false}
        />
      </View>
    );
  }

  renderBoard = () => {
    const { game } = this.props;
    const { board } = game;

    return(
      <View style={GameScreenStyles.boardContainer}>
        <View style={GameScreenStyles.boardStyle}>
          <Board 
            board={board} 
            gameOver={this.props.gameOver}
            onClick={this.handleClick}
          />
        </View>
      </View> 
    );
  }

  displayGameStatusAlert = () => {
    const { game } = this.props;
    const { winner, gameOver } = game;

    if(gameOver === true) {
      if(winner !== null) {
        return(
          Alert.alert(
            'Victory',
            `${winner} - Wins the game`,
            [{ text: 'Reset Game', onPress: () => this.resetGame()}],
            { cancelable: false }
          )
        )
      } else {
        return(
          Alert.alert(
            'Game Tied',
            'Play Again',
            [{ text: 'Reset Game', onPress: () => this.resetGame()}],
            { cancelable: false }
          )
        )
      }
    } 
  }

  render() {
    return (
      <View style={GameScreenStyles.container}>
      { this.renderHeading() }
      { this.renderPlayersCard() }
      { this.renderBoard() }
      { this.displayGameStatusAlert() }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.game,
  };
};

export default connect(
  mapStateToProps, 
  { newGame, updateCell, togglePlayer, checkGameOver }
)(GameScreen);