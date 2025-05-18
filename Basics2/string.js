//To Add the strings general way is :
const abc = "abc" 
const id =50
// console.log(name+id+"VALUE");

//MODERN WAY TO WRITE STRINGS
console.log(`Hello my name is ${abc} and my ID is ${id}`);
//REMEMBER TO USE BACKTICKS
const gnme = new String('NotLokesh')

//console.log(gnme.toUpperCase()); 
//For the Uppercase

console.log(gnme.length);
console.log(gnme.charAt(2));
console.log(gnme.indexOf('s'));

 
const newString = gnme.substring(0,4)
//cant use -ve  or it will start from zero 
console.log(newString);

const anotherString =gnme.slice(-8,4)
console.log(anotherString);


//*********************************************************//


// 1. Properties
let str = "Hello World";
str.length    // Returns string length in number

// 2. Search Methods
str.indexOf("World")     // Find position of substring in number
str.lastIndexOf("o")     // Find last occurrence in number 
str.search("pattern")    // Search with regex the str
str.includes("Hello")    // Returns true/false
str.startsWith("He")     // Check start of string
str.endsWith("ld")       // Check end of string

// 3. Extraction Methods
str.charAt(0)           // Get character at index
str.charCodeAt(0)       // Get character code
str.substring(0,5)      // Extract part of string
str.slice(0,5)         // Extract with negative indices
str.split(" ")         // Split string into array

// 4. Modification Methods
// 4. Modification Methods
console.log(str.toLowerCase());       // Convert to lowercase
console.log(str.toUpperCase());       // Convert to uppercase
console.log(str.trim());              // Remove whitespace
console.log(str.replace("World", "JavaScript"));  // Replace text
console.log(str.concat(" ", "JavaScript"));       // Join strings
console.log(str.padStart(15, "0"));   // Pad start of string
console.log(str.padEnd(15, "0"));     // Pad end of string

// 5. Template Literals
let name = "John";
`Hello ${name}`         // String interpolation

// 6. Comparison Methods
str.localeCompare("Hello")  // Compare two strings
str.match(/pattern/)        // Match with regex
str.matchAll(/pattern/g)    // Match all occurrences