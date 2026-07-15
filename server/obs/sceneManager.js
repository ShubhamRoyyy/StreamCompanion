/*
==========================================================
Scene Manager
==========================================================
*/

const { getOBS, isOBSConnected } = require("./obs");

async function getScenes() {

    if (!isOBSConnected()) {

        return [];

    }

    try {

        const obs = getOBS();

        const response = await obs.call("GetSceneList");

        return response.scenes;

    }

    catch (error) {

        console.log("❌ Failed to fetch scenes");

        console.log(error.message);

        return [];

    }

}

module.exports = {

    getScenes

};