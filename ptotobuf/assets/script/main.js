var websocket = require("websocket");
var MsgManger = require("MsgManager");

cc.Class({
    extends: cc.Component,
     
    properties: {
       
        btn:cc.Button,
        text:cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad () {
        this.btn.node.on("click",this.SendMassge,this);
        websocket.connect("ws://localhost:6080");
    },
    SendMassge(){
        //console.log("发送消息给服务器！");
        let self = this;
        let code = "your_echo";
        let dat =  "服务器你好，我是客户端！";
        MsgManger.request(code,dat,(data)=>{
            self.text.string = data
        });
       
    },
    
    start () {
     
    },
    
    // update (dt) {},
});
