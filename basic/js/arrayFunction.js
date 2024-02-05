//Array function Build here evennumber array elements find here



//Even number
function arrayEven(number){
const even =[]; //declare first
for(const num of number){ //2nd step here
    if(num%2===0){
        console.log(num);
        even.push(num);
    }
}
return even;
}
 const number =[1,2,3,4,5,6,7,8,9]; //3rd step here
//  arrayadd(number);
const evens =arrayEven(number);
console.log("Array elements evennumber  is :"+evens);


//Odd number
function arrayodd(number){
const odd =[]; //declare first
for(const num of number){ //2nd step here
    if(num%2===1){
        console.log(num);
        odd.push(num);
    }
}
return odd;
}
 const number1 =[1,2,3,4,5,6,7,8,9]; //3rd step here
//  arrayadd(number);
const odd =arrayodd(number);
console.log("Array elements evennumber  is :"+odd);