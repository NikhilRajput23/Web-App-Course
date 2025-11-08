    const express=require("express");
    const z=require("zod");
    const app=express();
    const schema=z.array(z.number());

    app.use(express.json());
    app.post("/helth",function(req,res){
        const kidney=req.body.kidney;
        const k=schema.safeParse(kidney);
        if(!k.success){
            res.status(411).json({
    msg:"invalid"
            })

        }else{
            res.send({
                msg:"valid",
   data:k.data,
            });
         
        }
    });
    app.listen(3000 )