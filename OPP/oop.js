// Similar to class 
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
// console.log(user.getuserdetails());
// console.log(this); //empty in node but window object in browser

//this is  current context
// new keyward is use for creating new instances ,new context or constructor function..new memory or object is created .
//new will stop overwriting in functions

Array.prototype.loki = function () {
   return `Ohh An custom Method !!`
}
myarr = [1,2,3,34,];
// console.log(myarr.loki());

class Vehicle{
   constructor(model,make){
      this.make = make
      this.model = model
   }
   start(){
      return `this is a car from ${this.make} and model of ${this.model}`
   }
}


// Inheritance of Object orineted programming

class Car extends Vehicle{
   drive(){
      return `this is ${this.model}  , an Inheritance example `
   }
}

let mycar =new Car("safari", "TATA")
console.log(mycar.start());

console.log(mycar.drive());  // Inheritance Example


// Encapsulation :- Restriction of direct access to  object Data
class Bankacc{
   #balance = 0;
   deposit(money){
      this.money = money
      this.#balance += money
      return `this ${this.money} is Deposited`
   }
   getbalance(){
      return `the Balance is : $ ${this.#balance}`
   }
}
let acc = new Bankacc
// console.log(acc.#balance);
// acc.deposit(600)
// console.log(acc.getbalance());

// Abstraction 
// It doesnt care about complex working it all takes that how  it is implemented


















