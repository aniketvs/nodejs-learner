const mysql = require('mysql');
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"innovatia"
})
//only for error cheacking
connection.connect((err)=>{
    if(err){
        console.log("error ");
    }else{
        console.log("connected");
    }
})

module.exports = connection;