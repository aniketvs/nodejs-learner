const connection = require('./connection');


const insert = async ()=>{
    const db = await connection();

    const result = await db.insert(
        [
            {name:"mukesh",branch:"cse",year:"4th"},
            {name:"surypraksh",branch:"me",year:"4th"}
        ]
    );
  if(result.acknowledged){
    console.log("yes");
  }else{
    console.log("no");
  }
};

insert();