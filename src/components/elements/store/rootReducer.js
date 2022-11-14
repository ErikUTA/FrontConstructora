import { combineReducers } from '@reduxjs/toolkit';
import redux from './redux';

const createReducer = asyncReducers =>
	combineReducers({
		redux,
		...asyncReducers
	});

export default createReducer;
