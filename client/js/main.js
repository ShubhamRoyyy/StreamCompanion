// ==========================================================
// Socket Connection
// ==========================================================

const socket = io();

// ==========================================================
// UI Elements
// ==========================================================

const connectionChip = document.getElementById("connection-status");

const twitchChip = document.getElementById("twitch-status");

const youtubeChip = document.getElementById("youtube-status");

// ==========================================================
// Socket Events
// ==========================================================

socket.on("connect", () => {

    console.log("✅ Connected");

    connectionChip.innerHTML = "🟢 Connected";

    connectionChip.classList.remove("offline");
    connectionChip.classList.remove("warning");

    connectionChip.classList.add("online");

});

socket.on("disconnect", () => {

    console.log("❌ Disconnected");

    connectionChip.innerHTML = "⚫ Disconnected";

    connectionChip.classList.remove("online");
    connectionChip.classList.remove("warning");

    connectionChip.classList.add("offline");

});

socket.on("welcome", (data) => {

    console.log("🎉 Welcome Event");

    console.log(data);

});

// ==========================================================
// Temporary Demo
// ==========================================================

// These will later come from Twitch and YouTube APIs

twitchChip.classList.add("offline");

youtubeChip.classList.add("offline");