const express =require('express')
const port=600;
const app=express();


app.get('/',function (req,res){
   res.send('Nikhil Rajput say Hello')
});
app.listen(port);

