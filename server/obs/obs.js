/*
==========================================================
OBS Connection
==========================================================
*/

const OBSWebSocket = require("obs-websocket-js").default;

const obs = new OBSWebSocket();

let connected = false;

async function connectOBS() {

    try {

        await obs.connect("ws://127.0.0.1:4455", process.env.OBS_PASSWORD || "Shubham@2002");

        connected = true;

        console.log("✅ Connected to OBS");

    }

    catch (error) {

        connected = false;

        console.log("❌ OBS Connection Failed");

        console.log(error.message);

    }

}

function getOBS() {

    return obs;

}

function isOBSConnected() {

    return connected;

}

module.exports = {

    connectOBS,

    getOBS,

    isOBSConnected

};