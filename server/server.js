const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());


io.on('connection', (socket) => {
 
   socket.emit("user",socket.id)

   socket.on("disconnect", ()=>{
    socket.broadcast.emit("callended")
   })

   socket.on("callUser",(data)=>{
    io.to(data.userToCall).emit("callUser",{signal: data.signalData, from: data.from, name: data.name})


   })

   socket.on("answercall", (data)=>{
    io.to(data.to).emit("callAccepted",data.signal)
   })

});


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
