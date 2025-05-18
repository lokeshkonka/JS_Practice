// singleton

//objects literals

const jsuser = {
name: "lokesh",
age: 18,
email:"abc.gmail.in"

}
console.log(jsuser.email);
console.log(jsuser["name"]);
// // when the value has spaces use the above
// //to use as symbol const  mysym = Symbol("key1")
// // in object use sqr bracket [mysym]:"mykey1'

// //the fn object.freeze(jsuser)
// // so it will not change further
// //jsuser.age =19 //simply change  it

jsuser.greting =function(){

    console.log("Hello u used fn");
    
}
console.log(jsuser.greting());
// // jsuser.greting2 = function(){

// // console.log('Hello JS User,${this.name}');

    
// // }
// // console.log(jsuser.greting2());

// //const tinderuser = new Object()
// const tinderuser = {}

// tinderuser.id = "123abc"
// tinderuser.name = "sam"
// tinderuser.isloggedin = false

// //console.log(tinderuser);
// const reguser ={
// email: "some@ac.in",
//        fullname: {
//             username: {
//                 bstname: "lok",
//                 andname: "konka"
//             }

//        }

// }


// //console.log(reguser.fullname.username);

// //for merging use object.assign() 

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// //const obj3 = Object.assign(obj1,obj2)
// //console.log(obj3);
// //for {} it acts as a target in the function..........yaya
// // use spread object
// const obj3 ={...obj1,...obj2}

//  const users = [
    
//       {
//         id: 1,
//         email:"h@ac.in"
//       }
 
//  ]

//  //users[1].email
// console.log(tinderuser);
// //keys is used to get obj to aray by key.
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// //entries got the opp
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('islogged '));
//other properties is to check 

const course = {
       crsname: "jsin hindi",
    price: "999",
    coursetor: "hitesh"
}

const {coursetor:instructor}=course
console.log(instructor);
//api is also an object,json ex,api.github.com,json formatter beautify it
// {
//   name:"h"
//    cprice:"in hindi"
//    price:"free"
// }
[
   {},{},{}


]















