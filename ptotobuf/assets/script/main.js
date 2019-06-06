var websocket = require("websocket");
var net = require("net");

cc.Class({
    extends: cc.Component,

    properties: {
       
        btn:cc.Button,
        text:cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad () {
        this.btn.node.on("click",this.SendMassge,this);
        net.connect("127.0.0.1:6081");
    },
    SendMassge(){
        //cc.log("发送消息给服务器！");
        let self = this;
        let str = this.text.string;
        net.send("your_echo",str);
        net.sio.on('your_echo',function(data){
                console.log("your_echo", data);
                self.text.string = data;
            });
    },
    
    start () {
 

    },
    
    // update (dt) {},
});
