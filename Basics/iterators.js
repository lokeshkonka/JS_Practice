//for loop

for(let index=0;index<=10;index++){
  const element = index
  //console.log(element);
  
}
//console.log(element); obvious outsside its error
let MyARrr =["hero","other hero","superman","spiderman"]
for (let i = 0; i < MyARrr.length; i++) {
    const element =MyARrr[i];
    //console.log(element);
    
}

//break and continue

for (let i = 0; i <20; i++) {
    if (i == 5) {
        console.log(`5 detected`);
        break
        
        
    }
   //console.log(i);
}

for (let i = 0; i <20; i++) {
    if (i == 5) {
        //console.log(`5 detected`);
        continue  
    }
   //console.log(i);
}


// DO WHILE LOOP AND WHILE LOOP

let index = 0;
while (index<10) {
   // console.log(`the index is ${index}`);
    index++;
}
//do while
let score = 0;
do {
    console.log(`The score is ${score}`);
    score++;
    
} while (score<10);
//kaam pehle hota fir condition check hota hai