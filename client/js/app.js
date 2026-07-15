const socket = io();

const status = document.getElementById("status");

socket.on("connect", () => {

    console.log("Connected!");

    status.innerText = "Connected";

});