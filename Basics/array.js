// array

// const myarr = [0,1,2,3,5] //any datatype
// // console.log(myarr[4]);

// const ar2 = new Array(1,2,3,4,5)
// console.log(ar2);

//Array Methods
// myarr.push(6)
// console.log(myarr);
// myarr.pop()

//myarr.unshift(any) //inserts elemnts in the start.

// myarr.shift() //removes first elemnt from array

//.,.,...,:/
//myarr.includes(9)  //true or false

//my.indexof(any) //says index of

// const newarr = myarr.join() //join will turn array into string


// console.log(myarr);
// console.log(newarr);
// console.log( typeof myarr);  //object
// console.log(typeof newarr); //string 
//  //join turns into string

//slics ,splice
console.log("A",myarr);

const myn1  = myarr.slice(1,3)
console.log("B",myn1);

const myn2  = myarr.splice(1,3)
console.log("b1",myarr);

console.log("C",myn2);
//splice manipulates the original array

const heros = ["a","b","c"]
const vilns = ["f","e","g"]
//heros.push(vilns)
// console.log(heros);
// heros.push(vilns) merge whole array
heros.concat(vilns)
console.log(heros);
//concat will return new array ..so use concat for mergingx  arrays
 const allheros = heros.concat(vilns)
 //console.log(allheros);
//

const all_new = [...heros,...vilns,...new_arr]
//spreads
console.log(all_new);

// const ano_arry = [1,2,3[6,7,[8,7]]]
// const real = ano_arry.flat(Infinity)  //ye ek hi array mai badal dega
// console.log(real);

// .isArray is for asking boolean.

//array.from converts array .. and array.of and array.is
// 

console.log(Array.from({name:"lol"}));
// this output will empty array we need to specify it

