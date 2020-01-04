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
import { PRIMARY_COLOR } from '../styles/colors';


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
    console.log('------------------------------------');
    console.log('I am in Reset');
    console.log('------------------------------------');
    this.props.newGame();
  }

  renderPlayersCard = () => {
    const { game } = this.props
    const { nextPlayer } = game;

    return(
      <View style={{flexDirection: 'row', alignItems: 'center' }}>
        <Player
          id="X"
          title="Atavus"
          iconName="cross"
          playerImage="p1"
          nextPlayer={nextPlayer}
        />
        <Player
          id="O"
          title="Kimera"
          iconName="circle"
          playerImage="p2"
          nextPlayer={nextPlayer}
        />
      </View>
    );
  }

  checkGameStatus = () => {
    const { game } = this.props;
    const { winner, gameOver } = game;

    if(gameOver === true) {
      if(winner !== null) {
        Alert.alert(
          'Victory',
          `${winner} - Wins the game`,
          [{ text: 'Reset Game', onPress: () => this.resetGame()}],
          { cancelable: false }
        );
      } else {
        Alert.alert(
          'Game Tied',
          'Please try again',
          [{ text: 'Reset Game', onPress: () => this.resetGame()}],
          { cancelable: false }
        );
      }
    } 


  }
  render() {
    const { game } = this.props;
    const { board } = game;

    this.checkGameStatus();
    
    return (
      <View style={styles.container}>
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
      <View style={styles.playerContainer}>
          { this.renderPlayersCard() }
      </View>
      <View style={styles.boardContainer}>
        <View style={styles.boardStyling}>
          <Board 
            board={board} 
            gameOver={this.props.gameOver}
            onClick={this.handleClick}
          />
        </View>
      </View>      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3A238C'
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
    backgroundColor: PRIMARY_COLOR, 
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