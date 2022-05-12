import IO from "socket.io-client";

const API_URI = `http://128.199.25.86:5000`;
var socket = null;

async function SocketConnect() {
    //  console.log("SocketConnect")
    socket = IO(`${API_URI}`, {
        forceNew: true,
        // transports: ['websocket'],
        // upgrade: false,
    });
    // console.log("dfsdfdfdf",socket)
    socket.on('connect', () => console.log("socket connected"))

    socket.on('error', (error) => console.log("socket error", error))

    socket.on('connect_error', (error) => {
        // alert('connect_error');
        console.log("socket connect_error", error)
    });

    socket.io.on("reconnection_attempt", () => {
        // ...
        console.log(" reconnection_attempt")
    });

    // socket.io.on("reconnect", () => {
    //     // ...
    //     console.log(" reconnect");
    // });
    socket.on('connect_timeout', (timeout) => {
        // alert("connect_timeout");
        console.log("socket connect_timeout", timeout)
    });

    // socket.on('disconnect', (timeout) => {
    //     console.log("socket disconnect", timeout)
    // });

    socket.on("session_start_status", (data) => {
        console.log("socket session_start_status", data);
        // dispatch(setSession({ status: true, sessionId: data.sessionId, eventId: data.eventId }));
    });
}

async function SocketDisconnect() {
    socket.on('disconnect', (timeout) => {
        console.log("socket disconnect", timeout)
    });
}


// async function SocketDisconnect(){   
//     socket.on('reconnect', (timeout) => {
//         console.log("socket reconnect", timeout);
//     });
// }


export default {
    SocketConnect,
    SocketDisconnect,
    socket
}
export {
    SocketConnect,
    SocketDisconnect,
    socket
}

