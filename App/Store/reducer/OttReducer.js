import { createSlice } from '@reduxjs/toolkit'

export const OttSlice = createSlice({
  name: 'OttReducer',
  initialState: {
    allContent: [],
    allTypeData : [],
    categoryData : []
  },
  reducers: {
    getAllOttData() {},
    setAllOttData(state,action) {
       return {...state, allContent:action.payload}
    },
    getOtttypeData() {},
    setOtttypeData(state,action) {
      // console.log("action",action.payload)
       return {...state, allTypeData:action.payload}
    }
  }
})

export const { getAllOttData, setAllOttData,getOtttypeData,setOtttypeData } = OttSlice.actions;

export default OttSlice.reducer;
