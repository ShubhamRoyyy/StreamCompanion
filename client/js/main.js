/*
==========================================================
Stream Companion
Application Entry Point
==========================================================
*/

import "./components/app-root.js";

// Initialize Socket Connection
import socket from "./socket.js";

// Chat Service
import { addMessage } from "./chat.js";

console.log("🚀 Stream Companion Started");

/*
==========================================================
Mock Chat Data
==========================================================
*/

const demoMessages = [

    {
        platform: "twitch",
        icon: "🟣",
        username: "Alex",
        text: "Nice clutch!"
    },

    {
        platform: "youtube",
        icon: "🔴",
        username: "Rahul",
        text: "GG!"
    },

    {
        platform: "shorts",
        icon: "📱",
        username: "Emma",
        text: "LOL 😂"
    },

    {
        platform: "twitch",
        icon: "🟣",
        username: "Mike",
        text: "Ace incoming!"
    },

    {
        platform: "youtube",
        icon: "🔴",
        username: "Sarah",
        text: "Love this stream ❤️"
    }

];

/*
==========================================================
Start Mock Chat Only After Connection
==========================================================
*/

socket.on("connect", () => {

    console.log("🎉 Mock chat started");

    setInterval(() => {

        const random =
            demoMessages[
                Math.floor(Math.random() * demoMessages.length)
            ];

        addMessage(random);

    }, 1500);

});