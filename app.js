var express = require('express')
var app = express()
app.use(express.static('public'));
var socket = require('socket.io');
var server =app.listen(3000,function(){
    console.log("Listening to port 3000");
    })    
 var io = socket(server);
 var gdata="";
io.on('connection',function(socket){
    socket.emit("start",gdata);
    socket.on("code",function(data){
      gdata=data.output;
        socket.broadcast.emit("change",{data:data.output,handle:data.handle});
    })
})