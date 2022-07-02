const http = require('http');
const connection = (req,resp) =>{if(req==10){
    resp.write("yes");
    resp.end();
}
else{
    resp.write("no");
    resp.end();
}
}
connection(10,20);
http.createServer(connection).listen(4500);