import Peer from "react-native-peerjs";
import {
     ADD_REMOTE_STREAM, MY_STREAM, LEAVE, REMOVE_REMOTE_STREAM, USER_ID,
    AUDIO_STATUS, VIDEO_STATUS, SPEAKER_STATUS, CHAT, CHATCOUNT, UPDATE_USER_NAME
} from "./type";

import { socket } from "@Socket";

const configuration = {
    "iceServers": [
        { "url": "stun:stun.l.google.com:19302" },
        { "url": 'stun:stun1.l.google.com:19302' },
        { "url": 'stun:stun2.l.google.com:19302' },
        { "url": 'stun:stun3.l.google.com:19302' },
        { "url": 'stun:stun4.l.google.com:19302' },
        {
            url: 'turn:numb.viagenie.ca',
            credential: 'Bokachoda@2020',
            username: 'soumya.webhibe@gmail.com',
        }
    ]
};


var peerServer = new Peer(configuration);
var peers = {};
var myUserId = null;

export const joinRoom = (stream, roomId) => async (dispatch) => {
    console.log("mystreamID",stream.id)
    peerServer = new Peer();
    let userName = stream.username;
    myUserId = stream.id;
    console.log("mystreamID",stream.id)
    //  peers = {};
    // const roomId = "123";
    // console.log("roomId", roomId, stream.username)
    // console.log("socket", socket)
    // peerServer.on('connection', conn => {
    //     console.log('Local peer has received connection.');
    // });
    dispatch({ type: MY_STREAM, payload: stream })

    peerServer.on('open', (userId) => {
        console.log("userId", userId)
        
        dispatch({ type: USER_ID, payload: userId })
        
        socket.emit('join-room', { userId, roomId })
    })

    socket.on("user-connected", (userId) => {
        console.log("userName connected", userId)

        connectToNewUser(userId, userName, stream, dispatch)
    });

    socket.on("user-disconnected", userId => {
        console.log("user-disconnected", userId, peers[userId])
        if (peers[userId]) {
            peers[userId].call.close();
        }
    })

    socket.on("audio_status", (userId, status) => {
        // console.log("audio_status", userId, status)
        dispatch({
            type: AUDIO_STATUS,
            payload: {
                userId: userId,
                status: status,
                streamId: peers[userId].stream.id
            }
        })
    });

    socket.on("video_status", (userId, status) => {
        // console.log("video_status", userId, status)
        dispatch({
            type: VIDEO_STATUS,
            payload: {
                userId: userId,
                status: status,
                streamId: peers[userId].stream.id
            }
        })
    });

    socket.on("speaker_status", (userId, status) => {
        // console.log("speaker_status", userId, status)
        if (peers[userId] && peers[userId].stream) {
            dispatch({
                type: SPEAKER_STATUS,
                payload: {
                    userId: userId,
                    status: status,
                    streamId: peers[userId].stream.id
                }
            })
        }
    });


    socket.on("getgrpchat", (data) => {
        console.log("getgrpchat", data);
        // if (peers[userId] && peers[userId].stream) {
            dispatch({
                type: CHAT,
                payload: data.data
            })
        // }
    });

    peerServer.on("call", (call) => {
        // console.log("chk stream", call.peer)
        const conn = peerServer.connect(call.peer);
        call.answer(stream);

        let myData = {
            userName : userName, 
            userId : myUserId
        }

        conn.on('open', () => {
            // console.log("back to user")
            conn.send(myData);
        });

        call.on('stream', (userStream) => {
            // console.log("userStream peer", userStream)
            let data = {
                call: call,
                stream: userStream
            }

            peers[call.peer] = data
            // dispatch({type: ADD_STREAM, payload : userStream})
            dispatch({ type: ADD_REMOTE_STREAM, payload: userStream })
        })

        call.on('close', () => {
            // console.log("streamstream", peers[call.peer].stream)
            dispatch({ type: REMOVE_REMOTE_STREAM, payload: peers[call.peer].stream.id })
        })
    })

    peerServer.on('connection', (conn) => {
        conn.on('data', (data) => {
            // Will print 'hi!'
            console.log("remote user data",data);
            dispatch({ type: UPDATE_USER_NAME, payload: data })
        });

        conn.on('open', () => {
            let myData = {userName}
            conn.send(myData);
        });
    });
};

function connectToNewUser(userId, userName, stream, dispatch) {
    // if(typeof(peers[userId]) == 'undefined'){
        let data = {}
        const conn = peerServer.connect(userId);
        const call = peerServer.call(userId, stream);
        let myData = {
            userName : userName,
            userId : myUserId
        }

        conn.on('open', () => {
            console.log("done myData", myData)
            conn.send(myData);
        });

        call.on('stream', (remoteVideoStream) => {
            if (remoteVideoStream) {
                // console.log("user stream",remoteVideoStream)
                data.stream = remoteVideoStream;
                dispatch({ type: ADD_REMOTE_STREAM, payload: remoteVideoStream })
            }
        })
        call.on('close', () => {
            // console.log("streamstream", peers[userId].stream)
            dispatch({ type: REMOVE_REMOTE_STREAM, payload: peers[userId].stream.id })
        })

        data.call = call;
        peers[userId] = data
}

export const LeaveMeeting = () => async (dispatch) => {
    peerServer.disconnect(true);
    peerServer.destroy(true);
    dispatch({ type: LEAVE, payload: null })
}


export const setMsgCount = () => async (dispatch) => {
  
    dispatch({ type: CHATCOUNT, payload: null })
}
