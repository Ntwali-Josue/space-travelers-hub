import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rocketsReducer';
import missionsReducer from './missions/missionsReducer';

const combineMiddleware = [logger, thunk];

const reducer = combineReducers({ rockets: rocketsReducer, missions: missionsReducer });

const store = createStore(
  reducer,
  applyMiddleware(...combineMiddleware),
);

export default store;
