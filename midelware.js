module.exports = reqfilt = (req,resp,next)=>{
    if(req.query.age<18){
        resp.send("you are not eligible");
    }
    else{
        next();
    }
};
//it is external midelware function