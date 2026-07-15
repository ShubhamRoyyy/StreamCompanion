/*
==========================================================
Stream Companion Server
==========================================================
*/

const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = new Server(server);

const PORT = 3000;

/*
==========================================================
Serve Frontend
==========================================================
*/

app.use(express.static(path.join(__dirname, "../client")));

/*
==========================================================
Socket.IO
==========================================================
*/

io.on("connection", (socket) => {

    console.log("✅ Client Connected");

    socket.emit("welcome", {

        message: "Connected Successfully"

    });

    socket.on("disconnect", () => {

        console.log("❌ Client Disconnected");

    });

});

/*
==========================================================
Start Server
==========================================================
*/

server.listen(PORT, () => {

    console.log(`🚀 Server running at http://localhost:${PORT}`);

});