import { StyleSheet } from 'react-native';
import { GAME_BACKGROUND_COLOR, BOARD_COLOR, HEADING_LINE_COLOR } from './colors';

const GameScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GAME_BACKGROUND_COLOR
  },
  headingContainer: {
    flex: 0.1,
    justifyContent: 'flex-end',
    marginTop: 40
  },
  playerContainer: {
    flex: 0.4,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  boardContainer: {
    flex: 0.5,
    padding: 10,
  },
  headingStyle: {
    alignSelf: 'flex-start',
    fontSize: 50, 
    color: 'white',
  },
  headingLine: {
    borderBottomColor: HEADING_LINE_COLOR,
    borderBottomWidth: 10,
    borderRadius: 10,
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