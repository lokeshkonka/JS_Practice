const user ={
   username:"HITESH",
   issignedin:true,
   logincount:8,
   getuserdetails:function(){
    console.log("DB called");
    //console.log(username); //it is not defined
    console.log(this.username)
    console.log(this)
   }


}
console.log(user.getuserdetails());
console.log(this); //empty in node but window object in browser
//this is  current context
// new keyward is use for creating new instances ,new context or constructor function..new memory or object is created .
//new will stop overwriting in functions

// after someg




















