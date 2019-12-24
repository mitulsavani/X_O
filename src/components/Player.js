import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';


export const Player = () => {

  return (
    <View style={styles.container}>
      <View style={styles.playerContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  playerContainer: {
    height: 160, 
    width: 120, 
    margin: 15,
    borderWidth: 1, 
    borderColor: '#fff', 
    borderRadius: 10, 
    backgroundColor: '#27175D', 
  }
});
