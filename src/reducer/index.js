import {combineReducers} from 'redux';
import componentReducer from './componentReducer';

export default combineReducers({
   component : componentReducer
});