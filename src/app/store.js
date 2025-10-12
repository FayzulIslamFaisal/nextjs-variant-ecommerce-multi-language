import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './reduxFeatures/addToCardSlice'  // default export = reducer

export const store = configureStore({
  reducer: {
    card: cardReducer,
  },
})