const connection = require('./connection');

const deletedata = async ()=>{
  const db = await connection();
  const result = await db.deleteOne(
    {name:"suryprakash"}
  );
  const manyres = await db.deleteMany(
    {name:"gaurav"}
  );
  if(result.acknowledged && manyres.acknowledged){
    console.log("delted");
  }

};
deletedata();