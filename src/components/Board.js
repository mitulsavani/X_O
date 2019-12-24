import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import { PRIMARY_COLOR } from '../styles/colors';
import { Square } from './Square';

const board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

export const Board = () => {

  return (
    <View style = {styles.boardContainer}>
      <View style={{alignContent: 'center', justifyContent: 'center'}}>
      {board.map((row, rIndex) => (

        <View key={rIndex} style={styles.row}>
          {row.map((col, cIndex) => {
            
            return (
              <Square key={cIndex}></Square>
            );
          })}
        </View>
      ))}
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  boardContainer: {
    alignContent: 'center',
    height: 380, 
    width: 380, 
    borderRadius: 20, 
    backgroundColor: PRIMARY_COLOR, 
    padding: 10
  },
  row: {
    flexDirection: 'row'
  }
});
