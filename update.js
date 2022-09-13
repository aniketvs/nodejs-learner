const connection = require('./connection');

const uppdate = async ()=>{
   const data = await connection();
   const result = await data.updateOne(
      {name:'gaurav'},{
        $set:{name:"suryprakash",branch:"me"}
      }
   );
   const mulres = await data.update(
    {name:'gaurav'},{
      $set:{year:"3rd"}
    }
 );

   if(result.acknowledged){
    console.log("updated");
   }
   if(mulres.acknowledged){
    console.log("multiple data updated");
   }
};
uppdate();