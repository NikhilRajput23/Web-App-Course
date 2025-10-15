function user( num1,num2,fnttoAll){
    let r=num1+num2;
 fnttoAll(r);
}
function display(data){
    console.log("Result is "+data);
}
function d(data){
        console.log("sum of Result is "+data);

}
const value=user(1,2,d );

