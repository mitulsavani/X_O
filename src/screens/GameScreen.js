import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Board } from '../components/Board';
import { Player } from '../components/Player';


export default class GameScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
