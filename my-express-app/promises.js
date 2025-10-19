let promises=new Promise(function(re,rejected){
    let ka=true;
    if(ka){
        re("work proper");
    }else{
        rejected("not proper")
    }
});
promises
.then(msg=> console.log(msg))
.catch(err =>console.log(err));