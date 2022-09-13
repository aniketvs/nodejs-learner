const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017" ;

const client = new MongoClient(url);


async function connection(){
    let result = await client.connect();
let db =  result.db('nodejs');
let collection = db.collection('learner');
return collection;
}
module.exports = connection;