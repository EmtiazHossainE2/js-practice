function dhara (){
    let fibonacci = [0,1]
    for(let i = 2 ; i<=15 ; i++){
    //nth = (n-1)th + (n-2)th
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
    }
    return fibonacci;
}
let result = dhara()
console.log(result);

