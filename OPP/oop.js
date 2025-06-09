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


//Polymorphism
// the orignal can change in any form 

class bird{
   fly(){
      return `Flying...`
   }
}
class penguin extends bird{

   fly(){
      return `Penguins can't Fly use different Bird`
   }
}
let pengi = new penguin
console.log(pengi.fly());

let eagle = new bird
console.log(eagle.fly());

// Static Keyword is acccessed only with class

class Calculator {
   static add(a,b){
      return `The Addition is ${a+b}`
   }
}
console.log(Calculator.add(120,78));

// Getters and Setters

class employee {
   #salary // to make it private
   constructor(name,salary){
      if (salary < 0) {
         throw console.error("invalid salary");
         
      }
      else{
         this.name = name
         this.#salary = salary
      }
   }
   set salary(value) {
      if (value < 0) {
         throw new Error("Invalid salary");
         
      } else {
         this.#salary = value
      }
   }
   get salary(){
         console.error("cannot access directly ")
   }
}
let emp = new employee("alice",-4000)
// console.log(emp.#salary);
// console.log(emp.salary());













