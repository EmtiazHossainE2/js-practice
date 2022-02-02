function isLeapYear (year){
    if(year % 4 == 0 && year % 100 != 0){
        return true ;
    }
    return false;
}
const myYear = 2100 ; 
const isMyYearLeapYear = isLeapYear(myYear)
console.log('Is my year is leap year ', isMyYearLeapYear);
