function square(n){
    return n*n;
}
function cube(n){
return n*n*n;
}
function sumcall(a,b,fb){
const var1=fb(a);
const var2 = fb(b);
return var1+var2;

}
console.log(sumcall(1,2,square));