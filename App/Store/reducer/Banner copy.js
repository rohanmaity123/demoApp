const IntState={
    allBanner:[],
}

const Banner = (state = IntState,action)=>{
    switch(action.type){
        case 'HOME_BANNER':
            // console.log("action.payload", action.payload)
            return {...state, allBanner:action.payload}
        default:
            return state;
    }
}


export default Banner;
