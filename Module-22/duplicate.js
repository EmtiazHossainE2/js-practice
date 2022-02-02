let friendsName = ['Emtiaz ' , 'Hossain' , 'Emon ' ,'Emtiaz ' , 'Doraemon' , 'Nobita ' ,'Emon ' , 'Nobita ' , 'Emtiaz ' ,'Emon ' , 'Doraemon' , 'Nobita ' ,] 

function removeDuplicate (friendsName){
    const unique = [];
    /* for(let i = 0 ; i < friendsName.length ; i++){
        const element = friendsName[i]
        console.log(element);
    } */ //****[jekono ekvabe hoy for loop / for of loop ]  
    for(const element of friendsName){
        // console.log(element)
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    } 
    return unique
}
let uniqueName = removeDuplicate(friendsName) 
console.log(uniqueName);
