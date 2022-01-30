function getFactorial (number){
    let factorial = 1
    for(let i = 1; i <= number; i++){
        factorial = factorial * i ; 
    }
    return factorial;
}
let number = 8 ; 
let factorialResult = getFactorial(number)
console.log('Your factorial value is : ', factorialResult);