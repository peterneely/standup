import { combineReducers } from 'redux';
import events from '../events/reducer';
import views from '../layout/views/reducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  events,
  routing: routerReducer,
  views,
});

export default rootReducer;
