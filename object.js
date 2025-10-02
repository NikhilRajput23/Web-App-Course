const dog={
    name:"kalu",
    gender:"male",
    speak:"bow bow"
};
const cat={
     name:"kali",
    gender:"female",
    speak:"meow meow"

};
function print(animal){
    console.log("animal "+animal["name"]+" speak "+animal["speak"])

};
print(cat);
print(dog);