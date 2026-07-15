const socket = io();

const status = document.getElementById("status");

socket.on("connect", () => {

    status.textContent = "Connected";

});

socket.on("welcome", (data) => {

    console.log(data);

});