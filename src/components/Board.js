import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

Board.propTypes = {
  board: PropTypes.array,
  onClick: PropTypes.func,
};

export default Board;