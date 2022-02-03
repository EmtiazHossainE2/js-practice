function countAnimals (miles){
    let first10MilesAverage = 10 ;
    let second10MilesAverage = 50 ;
    let lastMiles = 100 ; 
    if(miles <= 10){
        const count = miles * first10MilesAverage ;
        return count ;
    }
    else if ( miles <= 20){
        const animalsFirst10 = 10 * first10MilesAverage ; 
        const restMiles = miles - 10 ; 
        const secondTotal = restMiles * second10MilesAverage ;
        const totalSecond10MilesAnimals = secondTotal + animalsFirst10 ;
        return totalSecond10MilesAnimals ;
    }
    else{
        const animalsFirst10 = 10 * first10MilesAverage ; 
        const animalsSecond10 = 10 * second10MilesAverage ; 
        const restMiles2 = miles - 20 ; 
        const lastTotal = restMiles2 * lastMiles ;
        const totalAnimalSee = lastTotal + animalsFirst10 + animalsSecond10 ;
        return totalAnimalSee ;
    }
}
const animals = countAnimals(50)
console.log('Animals I see :', animals);