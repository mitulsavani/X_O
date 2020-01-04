import { StyleSheet } from 'react-native';
import { PLAYER_COLOR } from '../colors';

const PlayerStyles = StyleSheet.create({
  container: {
    margin: 20,
  },
  cardContainer: {
    height: 140,
    width: 110,
    borderColor: '#fff',
    borderRadius: 10, 
    backgroundColor: PLAYER_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentTurnContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -25,
  },
  currentTurnTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  titleStyle: {
    color: 'white',
    padding: 10,
    fontWeight: 'bold',
  },
});

export default PlayerStyles;