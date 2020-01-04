import React, { Component } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { X_COLOR, O_COLOR } from '../styles/colors';


class Player extends Component {

  renderPlayerCard() {
    const { title, iconName, playerImage, nextPlayer, id } = this.props;

    const getWidth = (nextPlayer) => {
      if(nextPlayer === id)
        return 1;
      else
        return 0;
    }

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
        <View style={[styles.playerContainer, { borderWidth: getWidth(nextPlayer) }]}>
          <Image
            style={{width: 60, height: 60, borderRadius: 40}} 
            source={assetsObject[playerImage]}
          />
          <Text style={{color: 'white', padding: 10, fontWeight: 'bold'}}>
            {title}
          </Text>
          <Icon
            name={iconName}
            color={getIconColor(iconName)}
            size={id === 'X' ? 25 : 20}
          />
        </View>
        <View style={{position: 'absolute', left: 0, right: 0, bottom: -25,}}>
        {
          nextPlayer &&
          nextPlayer === id ? <Text style={{color: 'white', fontWeight: 'bold', alignSelf: 'center'}}>Your Turn</Text> : null
        }
        </View>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        { this.renderPlayerCard() }
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  playerContainer: {
    height: 140, 
    width: 110, 
    borderColor: '#fff', 
    borderRadius: 10, 
    backgroundColor: '#27175D',
    justifyContent: 'center',
    alignItems: 'center' 
  }
});

export default Player;