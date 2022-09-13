//mongoose is advance version of mongodb using mongoose we can define schema of our table

const mongoose = require('mongoose');


  mongoose.connect("mongodb://localhost:27017/nodejs");
const schema = new mongoose.Schema({
    name:String,
    branch:String,
    year:String
})
const insertindb = async  ()=>{
  const modal = mongoose.model('learners',schema);
  const data = new modal({
    name:"arsalan",
    branch:"cse",
    year:"3rd"
                
})
     const result = await data.save();

}

const updateindb =async ()=>{
const modal =new mongoose.model('learners',schema);
const result = await modal.updateOne({name:"aniket"},{$set:{branch:"mechanical",name:"surypraksh"}});
await modal.updateMany({name:"aniket"},{year:"4th"});
console.log(result);
}

const deleteindb =async ()=>{
  const modal =new mongoose.model('learners',schema);
  const result = await modal.deleteOne({name:"aniket"});
 const many= await modal.deleteMany({name:"surypraksh"});

  console.log(many);
  }


  const findindb =async ()=>{
    const modal =new mongoose.model('learners',schema);
    const result = await modal.find();

  
    console.log(result);
    }
  
    findindb();