const products = [
    {name : 'Hp Laptop' , price : 55000} ,
    {name : 'Asus Laptop' , price : 85000} ,
    {name : 'I phone 17' , price : 505000} ,
    {name : 'Watch apple' , price : 55000} ,
    {name : 'Tab apple' , price : 55000} ,
    {name : 'Laptop Xd' , price : 59000} 
]
function searchProducts (products ,searchText){
    let result = []
    for(const product of products){
        if(product.name.includes(searchText)){
            result.push(product)
        }
    }
    return result ;
}
console.log(searchProducts(products ,'Laptop')) ;


function compare(a, b) {
    if (a.toString() === b) {
     return true;
    } else {
     return false;
    }
   }
   
   const result = compare(25, 25);
   console.log(result);

   console.log("123" + 123);

   let a='hi'
let b='there'
console.log(a+b)

const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
  continue;
 }
 console.log(array[i]);
}