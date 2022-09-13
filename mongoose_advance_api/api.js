const express = require('express');
require('./config')
const app=express();
const modal = require('./schema');
app.use(express.json());
app.get('/',async (req,resp)=>{
  
    const result = await modal.find();
    resp.send(result);
});
app.post('/',async (req,resp)=>{
    const data =new modal(req.body);
    const result= await data.save();

    resp.send(result);


});
app.put('/', async (req,resp)=>{
    let data = await modal.updateOne(
        {name:req.body.name},
        {
            $set:req.body
        }
    )
    resp.send(data);
});
app.delete('/', async (req,resp)=>{
    let data = await modal.deleteMany(
        {name:req.body.name}
    )
    resp.send(data);
});
app.listen(5005);