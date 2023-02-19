import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

export const FormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    add: (state,action) => {
      state.data = [...state.data,action.payload]
    },
  },
});

export const { add } = FormSlice.actions;

export const value = state => state.form.data;


export default FormSlice.reducer;