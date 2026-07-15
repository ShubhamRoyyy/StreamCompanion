const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("🚀 Stream Companion Server is Running!");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});