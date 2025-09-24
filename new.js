const user=[
    {
       firstname:"sachin",
        gender:"male",
        },
        {
            firstname:"nikhil",
            gender:"male",
},
{
   firstname:"simran",
   gender:"femal",
}
]
for(let i=0;i<user.length;i++){
if(user[i]["gender"]=="male"){
    console.log(user[i]["firstname"]);
}
}
