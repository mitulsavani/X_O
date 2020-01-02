import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import { PRIMARY_COLOR } from '../styles/colors';
import Cell from './Cell';

class Board extends Component {

  renderRows() {
    return [0, 1, 2].map(val => 
      <Cell
        onClick={this.props.onClick}
        rowIndex={val}
        boardRow={this.props.board[val]}
        gameOver={this.props.gameOver}
        key={val}
      />
    );
  }
  render() {
    return (
      <View style = {styles.container}>
        { this.renderRows() }
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  }
});

export default Board;