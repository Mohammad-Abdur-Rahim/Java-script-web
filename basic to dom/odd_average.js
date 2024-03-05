//Odd number average calculate here

function oddaverage(number){
    const odd=[];
    for(const num of number){
        if(num%2===1){
             odd.push(num);
        }
    }
    let sum=0;
    for(const numbers of odd){
       sum=sum+numbers;
      const avg=sum/odd.length;
      return avg;
    }
   

} // console.log(num);
const number=[1,2,3,4,5,6,7,8,9,11,13,15,17]
const avg=oddaverage(number);
console.log('Average is odd number is : '+avg);