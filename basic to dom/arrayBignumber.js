// Find The Max Number In An Array


// Find Array maximum Numbersss
function getmax(number){
    let max=number[0];
for(const num of number){
   if(num>max){
    max=num;
   }
}
return max;
}

const height=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const mx = getmax(height);
console.log("Find maximum numbers :",mx);





// Find Array minimum Numbers 
function getmin(number){
    let min=number[0];
for(const num of number){
   if(num<min){
    min=num;
   }
}
return min;
}

const height1=[111,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const mx1 = getmin(height1);
console.log("Find Minimum numbers :",mx1);