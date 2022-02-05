/* let factorial = 1 ; 
for( let i = 1; i <=4 ; i++){
    factorial = factorial * i ;
}
console.log(factorial);  */ 

/* let factorial =  1; 
for( let i = 4; i >= 1 ; i--){
    factorial = factorial * i ;
}
console.log(factorial);  */ 


function factorial (n){
    if(n==1){
        return  1;
    }
    return  factorial(--n) * n ;
}
console.log(factorial(4)) ; 

/* function factorial (n){
    if(n==1){
        return 1 ;
    }
    return n * factorial(--n);
}
console.log(factorial(4))  */

