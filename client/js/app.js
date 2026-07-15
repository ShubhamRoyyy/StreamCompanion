// Connect to the Socket.IO server
const socket = io();

// Get the status text
const status = document.getElementById("status");

/*
|--------------------------------------------------------------------------
| Connection Event
|--------------------------------------------------------------------------
*/

socket.on("connect", () => {

    console.log("✅ Connected to Server");

    status.innerText = "Connected";

});

/*
|--------------------------------------------------------------------------
| Welcome Event
|--------------------------------------------------------------------------
*/

socket.on("welcome", (data) => {

    console.log("🎉 Welcome Event Received");

    console.log(data);

});