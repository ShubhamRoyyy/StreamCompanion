/**
 * ------------------------------------------------------------
 * Socket Manager
 * ------------------------------------------------------------
 * Responsible for handling every Socket.IO connection.
 * All real-time events will live here.
 * ------------------------------------------------------------
 */

function initializeSocket(io) {

    io.on("connection", (socket) => {

        console.log("✅ Client Connected");

        // Send welcome message
        socket.emit("welcome", {
            title: "Stream Companion",
            message: "Welcome Shubham! 🎉"
        });

        // When client disconnects
        socket.on("disconnect", () => {

            console.log("❌ Client Disconnected");

        });

    });

}

module.exports = initializeSocket;