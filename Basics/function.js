// Function to add two numbers
function addTwoNumbers(num1, num2) {
    // Return the sum of num1 and num2
    return num1 + num2;
}

// Call the function and store the result
const result = addTwoNumbers(3, 5);
// Log the result
console.log("RESULT:", result);

// Function to display a login message for a user
function loginUserMsg(username) {
    // Check if username is undefined or not provided
    if (!username) {
        console.log("PLEASE ENTER A USERNAME");
        return;
    }
    // Return a message indicating the user has logged in
    return `${username} just logged in`;
}

// Call the function with a username and log the message
console.log(loginUserMsg("hitesh"));
// Call the function without a username to trigger the error message
console.log(loginUserMsg());




// function as an array
const myarry =[100,400,600];

function sndarray(mynewarray){
   return mynewarray[1]

}
console.log(sndarray(myarry));
//function as an object
const myobj ={
    user: "lolman",
    price:400
};

function sndobj(mynewobj){
   return `Username is ${mynewobj.user} and prices is ${mynewobj.price}`

}
console.log(sndobj(myobj));
