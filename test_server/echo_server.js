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
        let str = "客户端你好，我是服务器！";
        console.log("发送数据：", str);
		session.send(str);
	});
}
server.on("connection", on_server_client_comming);


