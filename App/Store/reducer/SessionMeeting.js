import { createSlice } from '@reduxjs/toolkit'

export const SessionMeetingSlice = createSlice({
    name: 'SessionMeeting',
    initialState: {
        userId: null,
        myStream: null,
        streams: [],
        remoteVideoStream: [],
        chat: [],
        chatCount: 0,
        refress: false,
        leaveStatus : false,
        sessionStart: false    
    },
    reducers: {
        setMyStream(state, action){
            return {...state ,  myStream : action.payload }
        },
        setUserId(state, action){
            state.userId = action.payload
        },
        addRemoteStream(state, action) {
            state.remoteVideoStream = [...state.remoteVideoStream, action.payload];
            state.refress = !state.refress;
        },
        removeRemoteStream(state, action) {
            let streamIndex = state.remoteVideoStream.findIndex(it => it.id == action.payload)
            if (streamIndex >= 0) {
                state.remoteVideoStream.splice(streamIndex, 1);
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
        audioStatus(state, action) {
            let data = action.payload; 
            console.log("data.status.status", data)
            let streamIndex = state.remoteVideoStream.findIndex(it => it.id == data.streamId)
            if (streamIndex >= 0) {
                state.remoteVideoStream[streamIndex].audio = !data.status.status;
                state.refress = !state.refress;
            }
        },
        videoStatus(state, action) {
            let data = action.payload;
            let streamIndex = state.remoteVideoStream.findIndex(it => it.id == data.streamId)
            if (streamIndex >= 0) {
                state.remoteVideoStream[streamIndex].video = !data.status.status;
                state.refress = !state.refress;
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

        setEventChat(state, action) {
            let chatData = action.payload;
            // state.chat = state.chat.concat(chatData);
            state.chat = [...state.chat,chatData];
            
        },

        wantToLeave(state, action) {
            state.leaveStatus = true;
            state.refress = !state.refress;
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
        },

        // setSession(state, action) {
        //     return {
        //         ...state, 
        //         sessionStart: !state.sessionStart
        //         }
        // }
    }
})

export const { setMyStream, setUserId, addRemoteStream, removeRemoteStream, updateUserName,
    audioStatus, videoStatus, spakerStatus, setEventChat,wantToLeave, leaveMeet, updateRaiseHand, updateSpeakerStat } = SessionMeetingSlice.actions;

export default SessionMeetingSlice.reducer;
