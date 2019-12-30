import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './root.reducer';

const composedEnhancer = compose(applyMiddleware(thunk));
const store = createStore(rootReducer, {}, composedEnhancer);

export default store;
