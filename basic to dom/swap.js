//Swap Variable, Swap Without Temp, Destructing


let a=10,b=20;

console.log("Before Swap two number",a,b);

let temp=a;
a=b;
b=temp;
console.log("After Swap two number",a,b);


let num1=5,num2=7;
console.log(num1,num2);
[num1,num2]=[num2,num1];
console.log(num1,num2);