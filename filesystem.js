const fs = require('fs');
const input=process.argv;
if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]);
}else if(input[2]=='remove'){
    fs.unlinkSync(input[3]);
}else{
    console.warn('invalid input');
}
const  path=require('path');
const dir= path.join(__dirname,'file');

for (let i = 0; i < 4; i++) {
    fs.writeFileSync(dir+"/ani"+i+".txt","file no:-"+i);
    
}

fs.readdir(dir,(err,file)=>{
    file.forEach((item)=>{
        console.log(item);
    })
})