const express = require("express");
const handler = require("./httpHandler.js")

const server = express();

server.use("/client", express.static("./jquery-mockup"))
    

server.listen(3001);

console.log("http://localhost:3001");