import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SECONDARY_COLOR } from '../styles/colors';

class Button extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('------------------------------------');
    console.log('CLICKED: ', this.props.rowIndex, this.props.colIndex);
    console.log('------------------------------------');
    this.props.onClick(this.props.rowIndex, this.props.colIndex);
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.buttonStyling}
        onPress={this.handleClick}
      >
        <Text style={styles.textStyling}>
          {this.props.buttonValue ? this.props.buttonValue : ''}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyling: {
    height: 100,
    width: 100,
    borderRadius: 15,
    margin: 5,
    backgroundColor: SECONDARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textStyling: {
    fontSize: 30,
  }
});

export default Button;
