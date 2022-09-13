const express = require('express');
const app = express();
const connection =require('./connection');
// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// async function getdata(){
//     let result = await client.connect();
//     let db = result.db('nodejs');
//     let collection = db.collection('learner');
//     let resp = await collection.find({}).toArray();
    
//}


//it is first way to read a data from mongo db using promise 
connection().then((resp)=>{
resp.find().toArray().then((res)=>{
    console.log(res);
})
});


//it is modern way to rad a data from database using async and await
const main = async ()=>{
    let result = await connection();
    let data = await result.find().toArray();
    console.log(data);
}
main();
