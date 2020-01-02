import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { SECONDARY_COLOR, X_COLOR, O_COLOR } from '../styles/colors';
import Icon from 'react-native-vector-icons/Entypo';

class Button extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.rowIndex, this.props.colIndex);
  }

  getIcon = (player) => {
    const xIcon = <Icon name="cross" size={90} color={X_COLOR} />;
    const oIcon = <Icon name="circle" size={60} color={O_COLOR} />;

    switch(player) {
      case 'X':
        return xIcon;
      case 'O':
        return oIcon;
      default:
        return null;
    }
  }

  render() {
    const {buttonValue} = this.props
    const currentPlayer = this.getIcon(buttonValue);

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonStyling}
        onPress={this.handleClick}
        disabled={buttonValue !== null}
      >
      {
        currentPlayer &&
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {currentPlayer}
        </View>
      }
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
});

export default Button;
