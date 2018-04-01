import { combineReducers } from 'redux';
import dates from '../dates/reducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  dates,
  routing: routerReducer
});

export default rootReducer;
