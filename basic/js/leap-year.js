//Leap year Calculation code here 
//simple way fn
function leapyear(year){
    if(year%4===0){
        return true;
    }else{
        return false;
    }
}
const result=leapyear(2001);
console.log(result);

//final Leap year code function is
function leapYear2(year){
    if(year % 100 !==0 && year % 4 === 0){  // return console.log('leap year');
       return true;
    }
    else{
        return false;
    }
}
const result2=leapYear2(2052);
console.log(result2);
