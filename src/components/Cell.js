import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Button from './Button';
import CellStyles from '../styles/components/CellStyles';

class Cell extends Component {

  renderColumns() {
    return [0, 1, 2].map(val =>
      <Button
        onClick={this.props.onClick}
        rowIndex={this.props.rowIndex}
        colIndex={val}
        cellValue={this.props.boardRow[val]}
        key={val}
      />
    );
  }

  render() {
    return (
      <View style={CellStyles.container}>
        { this.renderColumns() }
      </View>
    );
  }
}

Cell.propTypes = {
  boardRow: PropTypes.array,
  rowIndex: PropTypes.number,
  onClick: PropTypes.func,
};

export default Cell;