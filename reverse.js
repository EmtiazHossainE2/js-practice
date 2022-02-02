let mySelf = 'My name is Emtiaz Hossain Emon .';
function reverseMySelf (text){
    let reverse = '';
    for(const element of text){
        reverse = element + reverse   ;
    }
    return reverse
}
let myText = reverseMySelf(mySelf) 
console.log(myText);

let sum=0; 
for( let i = 0; i<=3;i++){ 
    sum = sum + i; 
    
}
console.log(sum);