/*
==========================================================
Socket Manager
==========================================================
*/

const socket = io();

/*
==========================================================
Connection Events
==========================================================
*/

socket.on("connect", () => {

    console.log("🟢 Connected to Server");

    window.dispatchEvent(
        new CustomEvent("socket-connected")
    );

});

socket.on("disconnect", () => {

    console.log("🔴 Disconnected from Server");

    window.dispatchEvent(
        new CustomEvent("socket-disconnected")
    );

});

/*
==========================================================
Welcome Event
==========================================================
*/

socket.on("welcome", (data) => {

    console.log("👋", data.message);

});

/*
==========================================================
Export Socket
==========================================================
*/

export default socket;