// array theke addition ber koro 

function arraySum (numbers){
    let sum = 0
    for(let i = 0 ; i < numbers.length ; i++){
        let arrayElement = numbers[i]
        sum = sum + arrayElement ;
    }
    return sum ;
}
const myArray = [1,2,3,4,5,6,7,8,9,10]
const arrayAddition = arraySum(myArray)
console.log('Array addition is ' , arrayAddition);