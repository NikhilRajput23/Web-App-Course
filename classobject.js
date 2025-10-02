class animl{
   constructor(name,sound){
    this.name=name;
    this.sound=sound;
   }
   static ino(){
    console.log("animal")

   }
   speak(){
    console.log("Animal"+this.name+" "+this.sound);
   }
}
animl.ino();
   let dog=new animl("dog","bow bow");
      let cat=new animl("cat","meow meow");
      dog.speak();

   
