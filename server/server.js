const express = require("express");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = new Server(server);

const PORT = 3000;

app.use(express.static(path.join(__dirname, "../client")));

io.on("connection", (socket) => {

    console.log("Client Connected");

});

server.listen(PORT, () => {

    console.log(`🚀 Server running at http://localhost:${PORT}`);

});