import { combineReducers } from '@reduxjs/toolkit';
import modalSlice from './modalSlice'; 
import authSlice from './authSlice'; 
import routeSlice from './routeSlice'; 

const reducer = combineReducers({
	modalSlice,
	authSlice,
	routeSlice
});

export default reducer;
