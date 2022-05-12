import { createSlice } from '@reduxjs/toolkit'

export const loyaltySlice = createSlice({
  name: 'Loyalty',
  initialState: {
    allLoyalty: [],
    loyalityPoint: 0
  },
  reducers: {
    setLoyalty(state,action) {
      state.allLoyalty = action.payload
    },
    setLoyaltyPoint(state, action) {
      state.loyalityPoint = action.payload
    }
  }
})

export const { setLoyalty, setLoyaltyPoint } = loyaltySlice.actions;

export default loyaltySlice.reducer;
