import { createSlice } from '@reduxjs/toolkit'

export const subscriptionSlice = createSlice({
  name: 'Subscription',
  initialState: {
    subscription : false
  },
  reducers: {
    getSubscriptionData() {},
    setSubscription(state,action) {
       return {...state, subscription:action.payload }
    }
  }
})

export const { setSubscription, getSubscriptionData } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
