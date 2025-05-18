// let a = 10
// const b = 20
// var c = 30
//{} //scope of that program

// if(true){
//     let a = 40
//     const b = 50
//     var c = 60
//     //console.log('INNER:',a);
    
// }
// //var scope ke bahar aagaya
 //console.log(a);
//console.log(b);
//console.log(c);
//console.log(a+'\n' +b+'\n'+c);
//in code editor the global scope is diferent than inspect console .

// function one()
// {
//     const user = 'lokesh'
//     function two()
//     {
//         const website = 'lokesh.com'
//         console.log('inner:',user);
        
//     }
    //console.log('outer:',website);
    //this will give error because website is not defined in outer function
    //two()
    
    

//one()
// if(true){
//     const user = 'lokesh'
//     if(true){
//        const website = 'lokesh.com'
//         //console.log(user + website);
        
//     }
//     //console.log(website);
//     //scope hi sirf inner if tak hi hai
// }
// //console.log(user);
//scope of user is only in if block
// ++++++lexical scope+++++++
// addone(5)
// function addone(num) {
//     return num + 1
    
// }
//addone(5)

// addtwo(5) //cannot access addtwo before initialization because it is a function expression
// const addtwo = function(num){   //anonymous function
//     return num + 2
// }
// addtwo(5)

const user={
    username : "annonymous",
    wel: function(){
      console.log(`hey, ${this.username} how u doing?!`);
      
    }

}
// this attribute will make sure that the change in username will change the output
//baat karta hai current context 
user.wel()
user.username = "lokesh"
user.wel()
console.log(this);

const chai =function(){
    let username = "ll"
    console.log(this.username);
    
}
chai()

// Arrow function 
const coffee = ()=>{
    let username = "ll"
    console.log(this.username);
    
}
/// there is no difference in this of arrow and normal functions

const addTwo = (num1,num2) =>{
    return num1 + num2
}
console.log(addTwo(12,10));
    const addTwo1 = (num1,num2) =>(num1 + num2)  //implicit returns
    const addTwo2 = (num1,num2) =>num1 + num2   ///implicit returns
    const addTwo3 = (num1,num2) =>({username:"ll"})   //use parenthisis to return object



