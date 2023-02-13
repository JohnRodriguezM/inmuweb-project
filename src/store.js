import { configureStore } from '@reduxjs/toolkit';
import formReducer from './components/Form/FormSlice';

export const store = configureStore({
  reducer: {
   form: formReducer,
  },
});