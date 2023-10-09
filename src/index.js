const express = require('express');
const { createServer } = require('http');
const path = require('path');
const {Server} = require('socket.io');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use( express.static(path.join(__dirname, "views")) )

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

io.on("connection", socket =>{
    
    socket.on("circle position", position => {
        io.emit("move circle", position)
    });

});


httpServer.listen(3000);