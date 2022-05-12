import { createSlice } from '@reduxjs/toolkit'

export const eventSlice = createSlice({
  name: 'Event',
  initialState: {
    allevent: [],
    floors : [],
    isLoading : true
  },
  reducers: {
    getallEvent() {},
    getallEventTable() {},
    setEvent(state,action) {
      const events = action.payload;
      // console.log("events",events)
       return {...state, allevent:events, isLoading : false}
    },
    setFloors(state,action) {
      const data = action.payload;
      data.forEach((element,index) => {
          // console.log(index);
          element.selected = index == 0 ? true : false ;
      });
       return {...state, floors:data, isLoading : false}
    },
    ChngFloors(state,action) {
        const index = action.payload ;
        // console.log("action.payload",index);

        // let dd = state.floors ; 
        let i = state.floors.findIndex((it)=> it.selected == true);
        // console.log("i",i)
        state.floors[i].selected = false ;
        state.floors[index].selected = true ;
        // setfloors(state.floors);
        // setrefresh(!refresh)
      //  return {...state, floors:state.floors, isLoading : !state.isLoading}
    },
  }
})

export const { getallEvent,getallEventTable,  setEvent, setFloors, ChngFloors } = eventSlice.actions;

export default eventSlice.reducer;
