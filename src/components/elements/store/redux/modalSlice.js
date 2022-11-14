import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		status: false,
		name: "",
		cost: "",
		encargado: ""
	},
	reducers: {
		setModalStatus: (state, action) => {
			state.status = action.payload;
		},
		setModalName: (state, action) => {
			state.name = action.payload;
		},
		setModalImage: (state, action) => {
			state.image = action.payload;
		},
		setModalCost: (state, action) => {
			state.cost = action.payload;
		},
		setModalEncargado: (state, action) => {
			state.encargado = action.payload;
		}
	},
});

export const {
	setModalStatus,
	setModalName,
	setModalImage,
	setModalCost,
	setModalEncargado
} = modalSlice.actions;

export default modalSlice.reducer;
