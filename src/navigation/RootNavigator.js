import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import GameScreen from '../screens/GameScreen';

const app = createSwitchNavigator(
  {
    Game: GameScreen
  },
  {
    initialRouteName: 'Game',
  }
);

const RootNavigator = createAppContainer(app);

export default RootNavigator;
