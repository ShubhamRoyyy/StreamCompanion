/*
==========================================================
Stream Companion Server
==========================================================
*/

const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");
const { connectOBS } = require("./obs/obs");
const { getScenes } = require("./obs/sceneManager");

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

io.on("connection", async (socket) => {

    console.log("✅ Client Connected");

    socket.emit("welcome", {
        message: "Connected Successfully"
    });

    /*
    ==========================================================
    Send OBS Scenes
    ==========================================================
    */

    const scenes = await getScenes();

    socket.emit("obs-scenes", scenes);

    socket.on("disconnect", () => {

        console.log("❌ Client Disconnected");

    });

});

/*
==========================================================
Start Server
==========================================================
*/

server.listen(PORT, async () => {

    console.log(`🚀 Server running at http://localhost:${PORT}`);

    await connectOBS();

});