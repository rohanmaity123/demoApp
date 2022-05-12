import { combineReducers } from "redux";
import Videocall from "./Videocall";
import CartItem from './CartItem';
import User from './User';
import Banner from './Banner';
import OttData from './OttReducer';
import Loyalty from './Loyalty';
import Quiz from './Quiz';
import Event from './Event';
import EventMeeting from './EventMeeting';
import SessionMeeting from './SessionMeeting'
import Subscription from "./Subscription";
import Feed from './Feed'

// export default combineReducers({
//     video : Videocall,
//     CartItem,
//     User,
//     Banner,
//     OttData : OttData,
//     Loyalty,
//     Quiz,
//     Event,
//     EventMeeting,
//     SessionMeeting,
//     Subscription,
//     Feed
// });

const appReducer = combineReducers({
    video : Videocall,
    CartItem,
    User,
    Banner,
    OttData : OttData,
    Loyalty,
    Quiz,
    Event,
    EventMeeting,
    SessionMeeting,
    Subscription,
    Feed
  });
  
  const rootReducer = (state, action) => {
    // when a logout action is dispatched it will reset redux state
    if (action.type === 'CLEAR_LOGIN_DATA') {
      state = undefined;
    }
  
    return appReducer(state, action);
  };

  export default rootReducer;