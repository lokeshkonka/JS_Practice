// // const promiseone = new Promise((resolve,reject)=>{
// //     //DB calls
// //     //async tasks
// //     console.log("async Code is completed");

    
// // })

// // promiseone.then(function(){
// //     console.log("Promise consumed");
    
// // })
// const promisetwo = new Promise((resolve,reject)=>{
//     //DB calls
//     //async tasks
//    setTimeout(function(){
//     console.log("async Code two");
//    },1000)
//     resolve()
// })

// promisetwo.then(function(){
//     console.log("Promise consumed");
    
// })
// new Promise((resolve,reject)=>{
//     //DB calls
//     //async tasks
//    setTimeout(function(){
//     console.log("async Code two");
//    },1000)
//     resolve()
// }).then(function(){
//     console.log("Promise  3 consumed");
    
// })

// const promisethree = new Promise(function(resolve,reject){
//     resolve({username:"chai",email:"cahi@example.com"})
// })
// promisethree.then(function(user){
//     console.log(user);
    
// })
const promisefour =new Promise(function(resolve,reject){
    let error = false
   setTimeout(()=>{
    if(!error){
        resolve({username:'HITESSSH',email:'123@abc.com'})
    }
    else{console.log("ERROR:KUCH TOH GADBAD HAI");
    }
   },1000)
})

// to get username we have to use call back then and catchs
promisefour.then((user)=>{
    console.log(user);
    return user.username
    
}).then((myusername)=>{
    console.log(myusername);
    // this will get the promise resolve username
}).catch((err)=>{
    console.log(err);
    //this will get the rejection part of promise
 })//.finally(()=>{
//     console.log("YE FINALLY RUN HOGA HI ..DOESNT MATTER REOSOLVE OR REJECT");
    
// })

const promisefive =new Promise(function(resolve,reject){
    let error = false
   setTimeout(()=>{
    if(!error){
        resolve({username:'javascript',email:'123@abc.com'})
    }
    else{console.log("ERROR:KUCH TOH GADBAD HAI");
    }
   },1000)
})
//async is a diff way to use then ,catch
async function consumepfive() {
    const response =  await promisefive
    // console.log(response);
    try {
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }    
}
consumepfive()

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data);
    
// })
// .catch((err)=>console.log(err)
// )
//async way to write it
async function hitsget() {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  try {
    let data=await response.json()
    console.log(data);
    
  } catch (error) {
    console.log(error);
    
  }
    
    
}
hitsget()
