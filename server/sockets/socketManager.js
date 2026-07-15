function initializeSocket(io) {

    io.on("connection", (socket) => {

        console.log("✅ Client Connected");

        socket.emit("welcome", {

            title: "Stream Companion",

            message: "Welcome Shubham! 🎉"

        });

    });

}

module.exports = initializeSocket;