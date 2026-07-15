const express = require("express");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");

const initializeSocket = require("./sockets/socketManager");

const app = express();

const server = http.createServer(app);

const io = new Server(server);

const PORT = 3000;

/*
|--------------------------------------------------------------------------
| Static Files
|--------------------------------------------------------------------------
*/

app.use(express.static(path.join(__dirname, "../client")));

/*
|--------------------------------------------------------------------------
| Socket Manager
|--------------------------------------------------------------------------
*/

initializeSocket(io);

/*
|--------------------------------------------------------------------------
| Start Server
|--------------------------------------------------------------------------
*/

server.listen(PORT, () => {

    console.log(`🚀 Server running at http://localhost:${PORT}`);

});