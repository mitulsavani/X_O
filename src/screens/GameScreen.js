import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { newGame, updateCell } from '../redux/actions';
import Board from '../components/Board';
import Player  from '../components/Player';
import { PRIMARY_COLOR } from '../styles/colors';


class GameScreen extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.newGame();
  }

  handleClick(rowIndex, colIndex) {
    this.props.updateCell(rowIndex, colIndex);
  }

  renderStatus = () => {
    const { game } = this.props
    const { nextPlayer } = game;

    return(
      <View style={{flexDirection: 'row', alignItems: 'center' }}>
        <Player
          id="X"
          title="Player 1"
          iconName="cross"
          nextPlayer={nextPlayer}
        />
        <Player
          id="O"
          title="Player 2"
          iconName="circle"
          nextPlayer={nextPlayer}
        />
      </View>
    );
  }
  render() {
    const { game } = this.props;
    const { board } = game;
    
    return (
      <View style={styles.container}>
      <View style={styles.playerContainer}>
          {this.renderStatus()}
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
  playerContainer: {
    flex: 0.4,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  boardContainer: {
    flex: 0.6,
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
  return {
    game: state.game,
  };
};

export default connect(
  mapStateToProps, 
  { newGame, updateCell }
)(GameScreen);