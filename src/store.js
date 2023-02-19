import { configureStore } from '@reduxjs/toolkit';
import formReducer from './components/Atoms/FormInput/FormSlice';

export const store = configureStore({
  reducer: {
   form: formReducer,
  },
});