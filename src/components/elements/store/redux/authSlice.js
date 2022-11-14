import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		username: "",
		roleId: ""
	},
	reducers: {
		setUserName: (state, action) => {
			state.username = action.payload;
		},
		setRole: (state, action) => {
			state.roleId = action.payload;
		}
	},
});

export const {
    setUserName,
	setRole
} = authSlice.actions;

export default authSlice.reducer;
