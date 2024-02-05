

//Array Reverse Function for lo0p[] unshift Implements 

const numbers =[1,2,3,45,6,7,889];
const rev_number=[];


for(let i=0;i<numbers.length;i++){
const num = numbers[i];
rev_number.unshift(num);
}
console.log(rev_number);