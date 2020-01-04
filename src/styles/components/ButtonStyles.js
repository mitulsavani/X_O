import { StyleSheet } from 'react-native';
import { CELL_COLOR } from '../colors';

const ButtonStyles = StyleSheet.create({
  buttonStyling: {
    height: 100,
    width: 100,
    borderRadius: 15,
    margin: 5,
    backgroundColor: CELL_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ButtonStyles;