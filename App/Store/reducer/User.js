const IntState={
    userData: {},
    login_status: false,
    refresh: false
}

const User = (state = IntState,action)=>{
    switch(action.type){
        case 'USERDATA':
            return {...state, userData : action.payload,login_status:true,refresh:state.refresh}
            case 'CLEAR_LOGIN_DATA':
                return {...state, login_status: false};
        default:
            return state;
    }
}

export default User ;