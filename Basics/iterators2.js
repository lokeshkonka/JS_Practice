//for of higher orders
// [{},{},{}]
const arr=[1,2,3,4,5]

//for of loop
// for (const element of object) {
    
// }
for (const num of arr) {
    //console.log(num);
    
    
}
const greetings = "Hello World!"
for (const num of greetings) {
   // console.log(num);
    
    
}

///MAPS  its an object,holds a key value pair...no duplicate values 
const MYmap = new Map();
MYmap.set("US","USA")
MYmap.set("AM","america")
MYmap.set("RS","russia")

console.log(MYmap);

for (const key of MYmap) {
    //console.log(key);
    
    
}
for (const [key,val] of MYmap) {
    //console.log(key,":-",val);
    
    
}

//OBJECTS

const Myobj ={
    game1:"NFS",
     game2:"spiderman"
}
// for (const [key,val] of Myobj) {
//     //console.log(key,":-",val);
    
    
// }
// objects are not iteratable
for (const key in Myobj) {
    //console.log(Myobj[key]);
    
    
}
for (const key in Myobj) {
    console.log(`the ${key} is ${Myobj[key]}`);
    
    
}
//for in array

for (const key in arr) {
   console.log(arr[key]);
   
}
// .foreach fucntions

const mycode =[
    {langName:"Javascript",langfile:"js"},{langName:"Python",langfile:"py"},{langName:"c programing",langfile:"cpp"}
]

mycode.forEach((item,number,array) =>{
    console.log(item.langName);
    

})
mycode.forEach((item,number,array) =>{
    console.log(item.langfile);
    console.log(number);
    console.log(array);
    

})
//we can easily access it ,it will never return

// const values =mycode.forEach((item,number,array) =>{
//     console.log(item);
     //return item

// })  

const num =[1,2,3,4,5,6,7,8,9,10]
const MYnum = num.filter((num) => num>4)
console.log(MYnum);

///by giving scopes it is explicit function

const mynum =num.filter((nums) =>{
    return nums < 4
})

console.log(mynum);
 /// also see reduce functions


