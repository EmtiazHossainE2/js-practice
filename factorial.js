// function getFactorial (number){
//     let factorial = 1
//     for(let i = 1; i <= number; i++){
//         factorial = factorial * i ; 
//     }
//     return factorial;
// }
// let number = 8 ; 
// let factorialResult = getFactorial(number)
// console.log('Your factorial value is : ', factorialResult);

function getFactorial (number){
    let factorial = 1 ; 
    let i = 1 ; 
    while(i<=number){
        factorial = factorial * i ;
        i++
    }
    return factorial ;
}
let number = 15 ;
let factorialResult = getFactorial(number)
console.log('Your factorial value is : ', factorialResult);