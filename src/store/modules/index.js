import { combineReducers } from 'redux';
import week from './week';
import todo from './todo';

export default combineReducers({
    week,
    todo
});