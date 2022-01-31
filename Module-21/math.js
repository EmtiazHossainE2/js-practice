const myNumber = -5 ; 
let output = Math.abs(myNumber) ; //the value without regard to whether it is positive or negative 
// console.log(output);  

const yourNumber = 6.1999 ; 
//const yourOutput = Math.ceil(yourNumber)  uporer number return kore  
//const yourOutput = Math.floor(yourNumber) dosomik er por count kore nah 
const yourOutput = Math.round(yourNumber) //Returns a supplied numeric expression rounded to the nearest integer.
// console.log(yourOutput);  

// ludu khelar random number 
// const ludu = Math.random() * 6 ;
// const luduOutput = Math.ceil(ludu) ;
// console.log(luduOutput);

for(let i = 1 ; i <=20 ; i++){ 
    //20 bar loop chalaici 
    const ludu = Math.random() * 6 ;
    const luduOutput = Math.ceil(ludu) ;
    console.log(luduOutput);
}