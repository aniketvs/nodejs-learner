const express = require('express');
const connection = require('./connection');
const app = express();
app.use(express.json());
app.get('/',(req,resp)=>{
    connection.query("select * from enquiry", (err,result)=>{
        if(err){
            resp.send("oops sorry");
        }
        else{
            resp.send(result);
        }
    })

})
app.post('/',(req,resp)=>{
    const data =req.body;
    connection.query('INSERT INTO enquiry SET ?', data , (error,result,fields)=>{
        if(error) error;
        resp.send(result);
    })
})

app.put('/:id',(req,resp)=>{
    const data = [req.body.text,req.params.id];
    connection.query('UPDATE enquiry SET text = ? WHERE id=?', data, (error,result,fields)=>{
        if(error) error;
        resp.send(result);
    })
})
app.delete('/:id',(req,resp)=>{
   // const data = req.params.id;  //we can get id by using below method
       
        connection.query('DELETE FROM enquiry WHERE id='+req.params.id, (error,result,fields)=>{
            if(error) error;
            resp.send(result);
        })
    })
app.listen(5000);