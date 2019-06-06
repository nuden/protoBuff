var ws = require("ws");
var server = new ws.Server({
	// host: ip, // 如果加了host，外部链接不上
	port: 6080,
});

console.log("服务器启动.");
function on_server_client_comming(session) {
	session.on("close", function() {
	});

	// error事件
	session.on("error", function(err) {
	});
	// end 

	session.on("message", function(data) {
		console.log("收到数据：", data);

		session.send(data);
	});
}
server.on("connection", on_server_client_comming);


var socket_io = require('socket.io')
var sio = socket_io(6081);

sio.sockets.on('connection',function(socket){
	console.log("connect called");

	// 自定义事件
	socket.on("your_echo", function (data) {
		console.log("your_echo", data);
        let str = "客户端你好，我是服务器！";
		socket.emit("your_echo", str);
	});
	// end 

	// 系统事件
	socket.on('disconnect',function(data){
		console.log("disconnect");		
	});


});
