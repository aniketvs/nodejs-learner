const express =require('express');
const connection = require('./connection');
const mongodb = require("mongodb");
const app =express();
app.use(express.json());
app.get('/',async (req,resp)=>{
    let db= await connection();
    let result= await db.find().toArray();

    resp.send(result);
});


app.post('/',async (req,resp)=>{
    let db= await connection();
    let result = await db.insertOne(req.body);
    resp.send(result);
});


app.put('/',async (req,resp)=>{
    let db = await connection();
    let result = await db.updateOne(
        {name: req.body.name},
        {$set:req.body}
        
    );
    let resultmany = await db.updateMany(
        {name:req.body.name},
        {$set:req.body}
    )
    resp.send(result);

});

app.delete("/:id",async (req,resp)=>{
    const db=await connection();
    let result = await db.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    let resultmany = await db.deleteMany({name:req.body.name});
    resp.send(result+resultmany);

})

app.listen(5004);