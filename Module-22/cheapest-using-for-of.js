const phones = [
    {name : 'symphony v75', price : 6000 , camera : 8 , screenSize : 5},
    {name : 'nokia 2600', price : 16000 , camera : 16 , screenSize : 6},
    {name : 'walton w-55', price : 4000 , camera : 8 , screenSize : 5},
    {name : 'itel 5450', price : 5400 , camera : 4 , screenSize : 5},
    {name : 'OPPO X 2021', price : 155000 , camera : 32 , screenSize : 6},
    {name : 'samsung s-5', price : 46000 , camera : 8 , screenSize : 7},
    {name : 'i phone 10', price : 40000 , camera : 16 , screenSize : 4},
]
function cheapest (phones){
    /* let cheapPhone = phones[0] ;
    for(const phone of phones){
        if( phone.price < cheapPhone.price ) {
            cheapPhone = phone ;
        }
    }
    return cheapPhone ; */
    
    let cheapPhone = phones[0] ;
    for(let i = 0 ; i < phones.length; i++){
        const phone = phones[i];
        if( phone.price < cheapPhone.price ) {
            cheapPhone = phone ;
        }
    }
    return cheapPhone ; 

}
let iWillBuy = cheapest(phones) 
console.log( iWillBuy);