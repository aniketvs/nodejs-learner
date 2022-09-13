const { apple } = require('color');
const express = require('express');
require('./config');
const modal = require('./schema');
const app = express();
app.use(express.json());
app.get('/:key',async (req,resp)=>{
const data = await modal.find({
   "$or":[{"name":{$regex:req.params.key}},
          {"year":{$regex:req.params.key}}

          ]
    })
  
    resp.send(result);

}
);

app.listen(5005);