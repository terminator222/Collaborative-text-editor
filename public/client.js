var output=document.getElementById('output');
var handle=document.getElementById('handle');
var edited=document.getElementById('edited');
var socket=io();
output.addEventListener('keypress',function(){
socket.emit('code',output.value);
});

output.addEventListener('keyup',function(){
    socket.emit('code',{output:output.value,handle:handle.value});
});
socket.on("change",function(data){
console.log(data);
output.value=data.data;
edited.innerHTML=data.handle +" has edited the code";
});
socket.on("start",function(data){
    output.value=data;
    });