import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import Button from './Button';

class Cell extends Component {

  renderColumns() {
    return [0, 1, 2].map(val =>
      <Button
        onClick={this.props.onClick}
        rowIndex={this.props.rowIndex}
        colIndex={val}
        cellValue={this.props.boardRow[val]}
        gameOver={this.props.gameOver}
        key={val}
      />
    )
  }

  render() {

    return (
      <View style={styles.container}>
        { this.renderColumns() }
      </View>
    );
  }  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default Cell;