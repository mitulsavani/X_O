import React, { Component } from 'react';
import { View } from 'react-native';
import Cell from './Cell';
import BoardStyles from '../styles/components/BoardStyles';

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
      <View style = {BoardStyles.container}>
        { this.renderRows() }
      </View>
    );
  }
};

export default Board;