var websocket = require("websocket");
var MsgManager = {

    request:function(code,data,cb){

        
        websocket.send_data(data,(event)=>{

            cb(event.data);

        });
        
   }
   
}

module.exports = MsgManager;