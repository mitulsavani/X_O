import { combineReducers } from 'redux';
import boardReducer from './reducers';

export default combineReducers({
  board: boardReducer,
})