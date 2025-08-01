"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allSockets = [];
wss.on("connection", (socket) => {
    console.log("user connected successfully");
    allSockets.push(socket);
    socket.on("message", (message) => {
        console.log("message receieved" + " " + message.toString());
        for (let i = 0; i < allSockets.length; i++) {
            const s = allSockets[i];
            s.send(message.toString() + " " + ": sent from server");
        }
    });
});
