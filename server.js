var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var onlineusers = [];
var onlineids = [];

app.use(express.static(__dirname + '/'));

io.on('connection', function(socket){

	io.emit('onlineusers' , {list:onlineusers});

	socket.emit('fetchuser','');

	// console.log(onlineusers);

	socket.on('newuser', function(data){
		// console.log(data);
		onlineusers[onlineusers.length] = data;
		onlineids[onlineusers.length] = socket.id;
		io.emit('onlineusers' , {list:onlineusers});
		socket.emit('welcome', { message: 'Welcome! '+data, id: socket.id });
		socket.broadcast.emit('connected', { message: data, id: socket.id });
	});
	
	socket.on('disconnect', function(){

		io.emit('disconnected', { message: onlineusers[onlineids.indexOf(socket.id)-1], id: socket.id });
		
		var i = onlineids.indexOf(socket.id);
		if(i != -1) {
			onlineusers.splice(i-1, 1);
			onlineids.splice(i-1, 1);
		}
 
		io.emit('onlineusers' , {list:onlineusers});
	});

	socket.on('chat message', function(msg){
		io.emit('chat message', { msg : msg.msg , sender : msg.sender});
	});

	socket.on('typing message', function(msg){
		socket.broadcast.emit('typing message', { msg : msg.msg, sender : msg.sender});
	});

});

http.listen(3000, function(){
	console.log('listening on *:3000');
});