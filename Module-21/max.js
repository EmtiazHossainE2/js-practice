// simple 
/* let num1 = 10
let num2 = 20
let num3 = 30 
let result = Math.max(num1, num2, num3)
let result2 = Math.min(num1, num2, num3) 
console.log('Largest number is :' , result);
console.log('Smallest number is :' , result2); */ 


//Task 1 : Largest number  
function largestNumber (num1, num2, num3){
    let result = Math.max(num1, num2, num3) ;
    return result ;
}
let num1 = 10
let num2 = 20
let num3 = 30 
let largeNumber = largestNumber(num1, num2, num3)
console.log('Largest number is :' , largeNumber);  

//Task 2:  Smallest number

function smallestNUmber (number1, number2, number3){
    let result2 = Math.min(number1, number2, number3) ;
    // console.log('Smallest number is :' , result2);
    return result2 ;
}
let number1 = 10
let number2 = 20
let number3 = 30 
let smallNumber = smallestNUmber(number1, number2, number3)
console.log('Smallest number is :' , smallNumber);  
