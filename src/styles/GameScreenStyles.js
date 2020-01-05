import { StyleSheet } from 'react-native';
import { BOARD_COLOR, X_COLOR, O_COLOR } from './colors';

const GameScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingContainer: {
    flex: 0.1,
    padding: 30,
  },
  playerContainer: {
    flex: 0.3,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  boardContainer: {
    flex: 0.6,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingStyle: {
    alignSelf: 'center',
    padding: 10,
    fontSize: 50, 
    fontWeight: 'bold',
    color: O_COLOR,
  },
  headingLine: {
    borderBottomWidth: 10,
    borderRadius: 10,
    borderBottomColor: X_COLOR,
  },
  boardStyle: {
    alignContent: 'center',
    height: 350, 
    width: 350, 
    borderRadius: 20, 
    backgroundColor: BOARD_COLOR,
    padding: 10
  },
});

export default GameScreenStyles;