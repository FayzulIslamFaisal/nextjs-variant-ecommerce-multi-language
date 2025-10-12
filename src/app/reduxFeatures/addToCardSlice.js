import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cardItems: [],
}

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addToCard: (state, action) => {
      state.cardItems.push(action.payload)
    },
  },
})

export const {addToCard} = cardSlice.actions

export default cardSlice.reducer