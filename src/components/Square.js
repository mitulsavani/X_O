import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet} from 'react-native';
import { SECONDARY_COLOR } from '../styles/colors';


export const Square = () => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.squareContainer}>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  squareContainer: {
    height: 110, 
    width: 110, 
    borderRadius: 15, 
    backgroundColor: SECONDARY_COLOR, 
    margin: 5,
  }
});
