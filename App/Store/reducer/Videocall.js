import { createSlice } from '@reduxjs/toolkit'



export const videoCallSlice = createSlice({
    name: 'VideoCall',
    initialState: {
        userId: null,
        myStream: null,
        streams: [],
        remoteVideoStream: [],
        chat: [],
        chatCount: 0,
        refress: false,
        leaveStatus : false,
        instantModal : true
    },
    reducers: {
        setMyStream(state, action){
            state.myStream = action.payload
        },
        setUserId(state, action){
            state.userId = action.payload
        },
        addRemoteStream(state, action) {
            state.remoteVideoStream = [...state.remoteVideoStream, action.payload];
            if (state.remoteVideoStream.length > 0) {
                state.instantModal = false
            }else{
                state.instantModal = true
            }
        },
        removeRemoteStream(state, action) {
            let streamIndex = state.remoteVideoStream.findIndex(it => it.id == action.payload)
            if (streamIndex >= 0) {
                state.remoteVideoStream.splice(streamIndex, 1);
                
                if (state.remoteVideoStream.length > 0) {
                    state.instantModal = false
                }else{
                    state.instantModal = true
                }
            }

        },
        updateRaiseHand(state, action) {
            let data = action.payload;
            let streamIndex = state.remoteVideoStream.findIndex(it => it.id == data.streamId);
            if (streamIndex >= 0) {
                state.remoteVideoStream[streamIndex].raiseHand = data.status;
                state.refress = !state.refress;
            }
        },
        updateSpeakerStat(state, action) {
            let data = action.payload;
            let streamIndex = state.remoteVideoStream.findIndex(it => it.id == data.streamId);
            if (streamIndex >= 0) {
                state.remoteVideoStream[streamIndex].speaker = data.status;
                state.refress = !state.refress;
            }
        },
        updateUserName(state, action) {
            let data = action.payload;
            let streamIndex = state.remoteVideoStream.findIndex(it => it.id == data.userId);
            if (streamIndex >= 0) {
                state.remoteVideoStream[streamIndex].userName = data.userName;
                state.remoteVideoStream[streamIndex].uId = data.uId;
                state.remoteVideoStream[streamIndex].speaker = data.speaker;
                state.refress = !state.refress;
            }
        },
        videoStatus(state, action) {
            let data = action.payload;
            let streamIndex = state.remoteVideoStream.findIndex(it => it.id == data.streamId)
            if (streamIndex >= 0) {
                state.remoteVideoStream[streamIndex].video = !data.status.status;
            }
        },
        spakerStatus(state, action) {
            let data = action.payload;
            let streamIndex1 = state.remoteVideoStream.findIndex(it => it.id == data.streamId);
            if (streamIndex1 >= 0) {
                if (!data.status.status) {
                    let indx = state.remoteVideoStream.findIndex(it => it.id != data.streamId && it.speaker == true);
                    if (indx >= 0) {
                        state.remoteVideoStream[streamIndex1].speaker = data.status.status;
                    }
                } else {
                    state.remoteVideoStream[streamIndex1].speaker = data.status.status;
                }
            }
        },
        setChat(state, action) {
            let data = action.payload;
            state.chat.concat(data);
            state.chatCount + 1;
        },
        leaveMeet(state, action) {
            return {
                ...state, 
                userId: null,
                myStream : null,
                streams: [],
                remoteVideoStream : [],
                chat:[],
                chatCount : 0
                }
        }
    }
})

export const { setMyStream, setUserId, addRemoteStream, removeRemoteStream, updateUserName,
    audioStatus, videoStatus, spakerStatus, setChat, leaveMeet } = videoCallSlice.actions;

export default videoCallSlice.reducer;
