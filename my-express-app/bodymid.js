const express=require("express");
const app=express();
app.use(express.json());
app.post("/helth",(req,res)=>{
    const kidneys=req.body.kidneys;
    const kid=kidneys.length;
    res.send("you have"+kid+" kidneys")
});
app.listen(3000);