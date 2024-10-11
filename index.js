// 2 modules added (express and socket.io)
const express = require('express');
const app = express();
const socketIo = require('socket.io');

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(8000);
const io = socketIo(expressServer);

io.on('connection',(socket) => {
    
    console.log(socket.id, "has connected !!");
    socket.emit('messageFromServer',{data:"WELCOME to the Server !!"});

    socket.on('messageFromClient', (data) => {
        console.log(data);
    })
})
