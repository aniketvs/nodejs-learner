const express = require('express');
const events = require('events')
const app = express();
require('./mongoose_advance_api/config');
const modal = require('./mongoose_advance_api/schema')
const event = new events();
const connection = require('./connection');
const insert = async ()=>{
    const db = await connection();
    const result = await db.deleteOne(
      {name:"sakshi"}
    );
    
}
event.on("getevent",()=>{
 insert();
});
app.get('/',(req,res)=>{
    res.send("get api");
    event.emit("getevent");
});


app.listen(5007);