const z=require("zod");

function valid(obj){
    const schema=z.object({
  email:z.string().email(),
  pass:z.string().min(8),
    })
    const resp=schema.safeParse(obj);
    console.log(resp);

}
valid({
    email:"nikhilrajput@gmail.com",
    pass:"12345678"
})