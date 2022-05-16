import { configureStore } from '@reduxjs/toolkit';
import wordsReducer from '../features/wordsSlice';

export const store = configureStore({
  reducer: {
    words: wordsReducer,
  },
});
