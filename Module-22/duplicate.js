//ekta array theke unique value gulo bar koro .

let friendsName = ['Emtiaz ' , 'Hossain' , 'Emon ' ,'Emtiaz ' , 'Doraemon' , 'Nobita ' ,'Emon ' , 'Nobita ' , 'Emtiaz ' ,'Emon ' , 'Doraemon' , 'Nobita ' ] 

function removeDuplicate (friendsName){
    const unique = [];
    /* for(let i = 0 ; i < friendsName.length ; i++){
        const element = friendsName[i]
        console.log(element);
    } */ //****[jekono ekvabe hoy for loop / for of loop ]  
    for(const element of friendsName){
        // console.log(element)  debug korar jonne nicilam
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    } 
    return unique
}
let uniqueName = removeDuplicate(friendsName) 
console.log(uniqueName);

// array theke unique number ber koro 

let someNumbers = [1,2,3,4,5,1,6,7,8,9,2,4,5,3,2,10,4,6,32,5,54,1,7,6,4,6,3,7,1,10,5]
function removeDuplicateNumbers (numbers){
    let uniqueNumbers = [] 
    for(const numElements of numbers){
        if(uniqueNumbers.indexOf(numElements) == -1){
            uniqueNumbers.push(numElements)
        }
    }
    return uniqueNumbers
}
let singleNumbers = removeDuplicateNumbers(someNumbers) ; 
console.log(singleNumbers);
