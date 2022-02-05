//nijer vitor theke nijeke call kore setai recursive function 
function myNumber (i){
    if(i > 5){
        return ;
    }
    console.log(i);
    myNumber(i+1);
}
myNumber(1) ;