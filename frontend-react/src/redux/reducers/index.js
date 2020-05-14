import { combineReducers } from 'redux';
import tasks from './tasks';

const RootReducer = combineReducers({
  tasks
});

export default RootReducer;
