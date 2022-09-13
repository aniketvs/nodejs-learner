const express = require('express');
const reqfilt = require('./midelware');
const path = require('path');
const route = express.Router();//it is express funtcion which are used to route a page
route.use(reqfilt);//by using reqfilt we can use route insted of app
const reqfilter= (req,resp,next)=>{   
    if(req.query.age<18){
        resp.send("you are not eligible");
    }else  if(!req.query.age){
        resp.send("please enter a a AGE");
    }
    else{
        next();
    }
};
//by applying reqfilter it can filter out our request

const app =express();
//app.use(reqfilter);///it is used to apply midelware to all the routes
app.set('view engine','ejs');

app.get('/profile',(_,resp)=>{
    const user ={
        name:"aniket",
        email:"aniket@gmail.com",
        dob:"19-12-2002",
        skils:['web','c++','dsa']
    }
    resp.render('profile',{user});

});
app.get('/header',reqfilter,(_,resp)=>{  //by applying reqfilter it apply midelware condition on this page only
   
    resp.render('common/header');

});
route.get('/contact',(_,resp)=>{  //by applying reqfilter it apply midelware condition on this page only
   
    resp.send('contact page');

});
app.use('/',route);//it is used to know which page shoud we route
app.listen(5000);