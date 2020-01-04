import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { X_COLOR, O_COLOR } from '../styles/colors';
import PlayerStyles from '../styles/components/PlayerStyles';


class Player extends Component {

  displayCurrentPlayerTurn = () => {
    const { currentPlayer } = this.props;

    if(currentPlayer === null || currentPlayer === undefined || currentPlayer === false ) {
      return null;
    }

    return(
      <View style={PlayerStyles.currentTurnContainer}>
        <Text style={PlayerStyles.currentTurnTextStyle}>Your Turn</Text>
      </View>
    );
  }

  renderPlayerCard() {
    const { title, iconName, playerImage, currentPlayer } = this.props;

    const getIconColor = (iconName) => {
      if(iconName === "cross") 
        return X_COLOR;
      else
        return O_COLOR;
    }

    const assetsObject = {
      p1: require('../../assets/p1.png'),
      p2: require('../../assets/p2.png'),
    }

    return (
      <View>
        <View style={[PlayerStyles.cardContainer, { borderWidth: currentPlayer ? 1 : 0 }]}>
          <Image
            style={PlayerStyles.avatar} 
            source={assetsObject[playerImage]}
          />
          <Text style={PlayerStyles.titleStyle}>
            {title}
          </Text>
          <Icon
            name={iconName}
            color={getIconColor(iconName)}
            size={iconName === 'cross' ? 25 : 20}
          />
        </View>
        { this.displayCurrentPlayerTurn() }
      </View>
    );
  }

  render() {
    return (
      <View style={PlayerStyles.container}>
        { this.renderPlayerCard() }
      </View>
    );
  }
}

Player.propTypes = {
  title: PropTypes.string,
  iconName: PropTypes.string,
  playerImage: PropTypes.string,
  currentPlayer: PropTypes.bool,
};

export default Player;