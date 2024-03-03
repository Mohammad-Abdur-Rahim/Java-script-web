function add(num1,num2=0){ //default value set function
    const result = num1 + num2;
    console.log(num1 ,num2,result);
    return result;
}
const sum = add(10);
