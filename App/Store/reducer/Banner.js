import { createSlice } from '@reduxjs/toolkit'

export const bannerSlice = createSlice({
  name: 'allBanner',
  initialState: {
    allBanner: [],
    isLoading : true
  },
  reducers: {
    getOttBanner() {},
    setBannner(state,action) {
      const banner = action.payload;
      // console.log("banner",banner)
       return {...state, allBanner:banner, isLoading : false}
    }
  }
})

export const { getOttBanner, setBannner } = bannerSlice.actions;

export default bannerSlice.reducer;
