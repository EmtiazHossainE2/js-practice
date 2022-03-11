//ekta array theke max number ber koro  
// how to find the maximum and minimum element in an array
function largestNumber(numbers) {
    let largest = numbers[0];
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }

        if (element < smallest) {
            smallest = element;
        }
    }
    return { largest, smallest };
}
let maxArray = [10, 20, 30, 40, 50]
let largeAndSmallNumber = largestNumber(maxArray)
console.log('Your large number & small number is :', largeAndSmallNumber);


//ekta array theke min number ber koro  
/* function smallestNumber (numbers){
    let smallest = numbers[0] ;
    for(let i = 0 ; i < numbers.length; i++){
        const element = numbers[i];
        if( element < smallest){
            smallest = element ; 
        }
    }
    return smallest ;
}
let minArray = [10,20,30,40,50 ,3]   
let minNumber = smallestNumber(minArray)
console.log('The min number is ' , minNumber); */

