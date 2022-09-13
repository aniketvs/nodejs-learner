const express = require('express');
const app = express();
const multer = require('multer');
const uploads = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,'mongoose_advance_api');
        },
    filename:function(req,file,cb){
     cb(null,file.fieldname+'-'+Date.now()+'.jpg');
    }
    })
}).single('uploading_path');

app.post('/',uploads,(req,resp)=>{
    

    resp.send("uploaded");
});

app.listen(5006);