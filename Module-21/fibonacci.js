function dhara (num){
    if(typeof num != 'number'){
        return 'Enter a  number'
    }
    if(num < 2 ){
        return 'Enter a positive number greater than 1'
    }
    let fibonacci = [0,1]
    for(let i = 2 ; i<=num ; i++){
    //nth = (n-1)th + (n-2)th
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
    }
    return fibonacci;
}
let result = dhara(-10) ;
console.log(result);

