import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { newGame } from '../redux/actions';
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
    console.log('------------------------------------');
    console.log("Cord :", {rowIndex, colIndex});
    console.log('------------------------------------');
    
  }

  render() {
    const { game } = this.props;
    const { board, gameOver } = game;
    console.log('------------------------------------');
    console.log('NEW GAME : ', game);
    console.log('------------------------------------');
    
    return (
      <View style={styles.container}>
      <View style={styles.playersContainer}>
        <Player/>
        <Player/>
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
  playersContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  boardContainer: {
    flex: 0.5
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
  console.log('State ', state);
  console.log('------------------------------------');
  return {
    game: state.game,
  };
};

export default connect(
  mapStateToProps, 
  { newGame }
)(GameScreen);