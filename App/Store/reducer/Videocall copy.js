import { ADD_STREAM, ADD_REMOTE_STREAM, MY_STREAM, LEAVE,REMOVE_REMOTE_STREAM, USER_ID, AUDIO_STATUS, 
    VIDEO_STATUS, SPEAKER_STATUS, CHAT, CHATCOUNT, UPDATE_USER_NAME } from "../action/type";
const initState = {
    userId: null,
    myStream : null,
    streams: [],
    remoteVideoStream : [],
    chat:[],
    chatCount : 0
} ;

export default (state= initState, {type, payload}) => {
     switch (type) {
         case MY_STREAM:
             return{
                 ...state,
                 myStream : payload
             }
        case ADD_STREAM:
            // console.log("payload", payload)
            return{
                ...state,
                streams : [...state.streams, payload]
            }
        case ADD_REMOTE_STREAM:
            // console.log("payload", payload)
            return{
                ...state,
                remoteVideoStream : [...state.remoteVideoStream, payload]
            }
        case UPDATE_USER_NAME:
            return updateUserName(state, payload)
        case REMOVE_REMOTE_STREAM :
            return removeStream(state, payload)
        case USER_ID :
            return {...state, userId : payload}
        case AUDIO_STATUS :
            return setAudio(state, payload)
        case SPEAKER_STATUS :
            return setSpeaker(state, payload)
        case VIDEO_STATUS :
            return setVideo(state, payload)
        case CHAT :
            return setChat(state, payload)
        case CHATCOUNT : 
            return {
                ...state, chatCount : 0
            }    
        case LEAVE :
            // console.log("leaveeee")
            return {
                ...state, 
                userId: null,
                myStream : null,
                streams: [],
                remoteVideoStream : [],
                chat:[],
                chatCount : 0
                }
            
         default:
            return state;
     }
}

const updateUserName = (state, data) => {
    let streamIndex = state.remoteVideoStream.findIndex(it => it.id == data.userId);

    console.log("state.remoteVideoStream", state.remoteVideoStream)
    console.log("redux data",data)
    if(streamIndex >= 0){
        state.remoteVideoStream[streamIndex].userName = data.userName;
        state.remoteVideoStream[streamIndex].userId = data.userId;
        return { ...state, remoteVideoStream: state.remoteVideoStream}
    }

    return { ...state }
}

const removeStream = (state, data) => {
    let streamIndex = state.remoteVideoStream.findIndex(it => it.id == data)
    if(streamIndex >= 0){
        state.remoteVideoStream.splice(streamIndex, 1);
        return { ...state, remoteVideoStream: state.remoteVideoStream}
    }

    return { ...state }
}

const setAudio = (state, data) => {
//    console.log("data", data)
   let streamIndex = state.remoteVideoStream.findIndex(it => it.id == data.streamId)
   if(streamIndex >= 0){
      let dd = state.remoteVideoStream[streamIndex].getTracks().find((it)=> it.kind == "audio");
      console.log("dd", dd)
      dd.muted = !dd.muted;
      dd._enabled = !dd._enabled;

    //   console.log("state.remoteVideoStream", state.remoteVideoStream)
      return { ...state, remoteVideoStream: state.remoteVideoStream}
   }
   return state;
}

const setSpeaker = (state, data) => {
    // console.log("data", data)




    let streamIndex1 = state.remoteVideoStream.findIndex(it => it.id == data.streamId);
    if(streamIndex1 >= 0){
        // console.log("streamIndex1", streamIndex1)
       
       if(!data.status.status){
              let indx = state.remoteVideoStream.findIndex(it => it.id != data.streamId && it.speaker == true);
              if(indx >= 0){
                 state.remoteVideoStream[streamIndex1].speaker= data.status.status;
                 return { ...state, remoteVideoStream: state.remoteVideoStream}
              }
       }else{
         state.remoteVideoStream[streamIndex1].speaker= data.status.status;
         return { ...state, remoteVideoStream: state.remoteVideoStream}
       }
    }

    // let streamIndex1 = state.remoteVideoStream.findIndex(it => it.id == data.streamId && it.speaker == true);
    // if(streamIndex1 >= 0){
    //     // console.log("streamIndex1", streamIndex1)
    //    state.remoteVideoStream[streamIndex1].speaker= false;
    //    return { ...state, remoteVideoStream: state.remoteVideoStream}
    // }


    // let streamIndex = state.remoteVideoStream.findIndex(it => it.id == data.streamId);
    // if(streamIndex >= 0){
    //     // console.log("streamIndex", streamIndex)
    //    state.remoteVideoStream[streamIndex].speaker= true;

    //    return { ...state, remoteVideoStream: state.remoteVideoStream}
    // }
    return state;
 }

const setVideo = (state, data) => {
    // console.log("setVideo", data)
    let streamIndex = state.remoteVideoStream.findIndex(it => it.id == data.streamId)
    if(streamIndex >= 0){
       state.remoteVideoStream[streamIndex].video = !data.status.status;
    //    console.log("dd", dd)
    //    dd.muted = !dd.muted;
    //    dd._enabled = !dd._enabled;
    //    dd.enabled = !dd.enabled;
    //    dd.video = !data.status.status;
    //    console.log("dd", dd)
    //    console.log("state.remoteVideoStream", state.remoteVideoStream)
       return { ...state, remoteVideoStream: state.remoteVideoStream}
    }
    return state;
 }

 const setChat = (state, data) => {
       return { ...state, 
       chat: state.chat.concat(data),
       chatCount : state.chatCount + 1}
    // return state;
 }