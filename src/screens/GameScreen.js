import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import { newGame, updateCell, togglePlayer, checkGameOver } from '../redux/actions';
import Board from '../components/Board';
import Player  from '../components/Player';
import { GAME_BACKGROUND_COLOR, BOARD_COLOR } from '../styles/colors';


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
      <View style={styles.headingContainer}>
        <Text style={{alignSelf: 'flex-start', fontSize: 50, color: 'white'}}>
          TIC TAC TOE
        </Text>
      <View
        style={{
          borderBottomColor: '#FFD032',
          borderBottomWidth: 10,
          borderRadius: 10,
        }}
      />
  </View>
    );
  }

  renderPlayersCard = () => {
    const { game } = this.props
    const { currentPlayer } = game;

    return(
      <View style={styles.playerContainer}>
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
      <View style={styles.boardContainer}>
        <View style={styles.boardStyling}>
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
      <View style={styles.container}>
      { this.renderHeading() }
      { this.renderPlayersCard() }
      { this.renderBoard() }
      { this.displayGameStatusAlert() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GAME_BACKGROUND_COLOR
  },
  headingContainer: {
    flex: 0.1,
    justifyContent: 'flex-end',
    marginTop: 40
  },
  playerContainer: {
    flex: 0.4,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  boardContainer: {
    flex: 0.5,
    padding: 10,
  },
  boardStyling: {
    alignContent: 'center',
    height: 350, 
    width: 350, 
    borderRadius: 20, 
    backgroundColor: BOARD_COLOR, 
    padding: 10
  },
});


const mapStateToProps = (state) => {
  console.log('------------------------------------');
  console.log('State: ', state.game);
  console.log('------------------------------------');
  return {
    game: state.game,
  };
};

export default connect(
  mapStateToProps, 
  { newGame, updateCell, togglePlayer, checkGameOver }
)(GameScreen);