const express = require('express');
const { WebSocketServer } = require('ws');
const WebSocket = require('ws');
const app = express();
const PORT = 3000;

const wss = new WebSocketServer({ port: 8001 });

wss.on('connection', function connection(ws) {
    ws.on('message', (data) => {
        const str = data.toString();
        wss.clients.forEach((cl) => {
            if (cl !== ws && cl.readyState === WebSocket.OPEN) {
                cl.send(str);
            }
        });
    });

    
})


app.listen(PORT, () => {
    console.log('hello world');
});