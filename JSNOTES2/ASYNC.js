// javascript is synchronous
// Execuetion context line one by one execuete hota hai
// CALL STACK and MEMORY HEAP  is nothing but JS engine
//Blocking codes(read sync files) and non blocking codes(reads async files)
//every things have thier own usecases

// const { log } = require("async");


// 
// network calls , timee functions, read / write files , user Input etc...
const sayhello= ()=>{
    console.log("say hello");
    
}
setTimeout(()=>{
    sayhello();
},2000)

// Closures
 function outer(){
    let c =5;
    return function (){
        c++;
        return c;
    }
 }
 let count = outer()
//  console.log(count());  6
//  console.log(count());  7
//  console.log(count());  8
//  console.log(count());  9
 