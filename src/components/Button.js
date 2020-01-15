import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import { X_COLOR, O_COLOR } from '../styles/colors';
import Icon from 'react-native-vector-icons/Entypo';
import ButtonStyles from '../styles/components/ButtonStyles';

class Button extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { rowIndex, colIndex } = this.props;

    this.props.onClick(rowIndex, colIndex);
  }

  getIcon = (player) => {
    const xIcon = <Icon name="cross" size={95} color={X_COLOR} />;
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

  renderCellIcon = (cellValue) => {
    const currentPlayer = this.getIcon(cellValue);

    if(cellValue === null || cellValue === undefined) {
      return null;
    }

    return(
      <View style={ButtonStyles.iconContainer}>
        {currentPlayer}
      </View>
    );
  }

  render() {
    const { cellValue } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={ButtonStyles.buttonStyling}
        onPress={this.handleClick}
        disabled={cellValue !== null}
      >
      { this.renderCellIcon(cellValue) }
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  cellValue: PropTypes.string,
  rowIndex: PropTypes.number,
  colIndex: PropTypes.number,
  onClick: PropTypes.func,
};

export default Button;
