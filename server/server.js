const express = require("express");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = new Server(server);

const PORT = 3000;

/*
|--------------------------------------------------------------------------
| Serve Static Frontend
|--------------------------------------------------------------------------
*/

app.use(express.static(path.join(__dirname, "../client")));

/*
|--------------------------------------------------------------------------
| Socket.IO
|--------------------------------------------------------------------------
*/

io.on("connection", (socket) => {

    console.log("✅ Client Connected");

    socket.emit("welcome", {

        title: "Stream Companion",

        message: "Welcome Shubham! 🎉"

    });

});

/*
|--------------------------------------------------------------------------
| Start Server
|--------------------------------------------------------------------------
*/

server.listen(PORT, () => {

    console.log(`🚀 Server running at http://localhost:${PORT}`);

});