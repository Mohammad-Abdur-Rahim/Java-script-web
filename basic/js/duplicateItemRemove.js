
//Duplicate element delete in Any Array code here
const foodNeed=['md','rana','pana','jana','md','karim'];
const numbers =[1,2,3,4,5,6,7,8,9,1];




//very important function 
function duplicateArrayFind(array){
    const unique=[];
 for(const item of array){
    if(unique.includes(item)===false){  //main concept code 
        unique.push(item);
    }
 }
 return unique;
}


const uniqarray=duplicateArrayFind(foodNeed);
console.log(uniqarray);