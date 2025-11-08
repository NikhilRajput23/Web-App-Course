const express=require("express");
const app=express();

app.use=(express.json());
let i=[
    {firstname:"Nikhil",
        age:22

    }
]
app.get("/",(req,res)=>{
    res.json(i);
    });
    app.post("/wow",(req,res)=>{

    })
    app.listen(3000,function(){
        console.log("server running on port");

    })
    