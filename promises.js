function nik(){
  let p=new Promise(function(resolve){
    resolve("Nikhil bhau");

  });
  return p;
}
function main(){
   nik().then(function(value){
    console.log(value);
});
}
main();