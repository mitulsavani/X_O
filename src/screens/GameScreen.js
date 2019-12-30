import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { Board } from '../components/Board';
import { Player } from '../components/Player';


class GameScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.navigation.setParams({ onNewGame: this.loadGame });
  }

  loadGame = () => {
    const { newGame } = this.props;
    newGame();
  }

  render() {
    console.log('------------------------------------');
    console.log('NEW GAME : ', this.props);
    console.log('------------------------------------');
    return (
      <View style={styles.container}>
      <View style={styles.playersContainer}>
        <Player/>
        <Player/>
      </View>
      <View style={styles.boardContainer}>
        <Board/>
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
  }
});


const mapStateToProps = (state) => {

  return {
    board: state.board,
  };
};

export default connect(
  mapStateToProps, 
  actions,
)(GameScreen);