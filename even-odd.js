// is even number 
function isEvenNumber (number){
    if(number % 2 == 0){
        return true;
    } 
    return false ;
}

const myNumber = 23 ;
const result = isEvenNumber(myNumber) ;
console.log('Is my number is even ' , result); 

const yourNumber = 50 ;
const yourResult = isEvenNumber(yourNumber);
console.log('Is your number is even' , yourResult);  


// is odd number 
function isOddNumber (number){
    // this two condition I can use 
    if(number % 2 == 1){
        return true
    } 
    // if(number % 2 !=0){
    //     return true
    // }
    return false
}
const myNumberOdd = 31 ; 
const myResult = isOddNumber(myNumberOdd)
console.log('Is my number is odd ', myResult );

const herNumberOdd = 52 
const herResult = isOddNumber(herNumberOdd)
console.log('Is her number is odd', herResult);
