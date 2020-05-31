import { combineReducers } from 'redux';
import { holidayReducer } from './holidayReducer';

export const rootReducer = combineReducers({ holidayReducer })
