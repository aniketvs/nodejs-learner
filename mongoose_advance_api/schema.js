const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name:String,
    branch:String,
    year:String
     })
module.exports= mongoose.model('learners',schema);
