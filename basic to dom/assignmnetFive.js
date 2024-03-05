//Assignment 5 code is here 
function monthlySavings(allPayments,livingCost){
     //Unexpected handle start--------------
    if(!Array.isArray(allPayments) || typeof livingCost !=='number'){
        return "Invalid Input";
    }
     //Unexpected handle end----------------
    let sumPayment=0;
for(let i=0;i<allPayments.length;i++){
    sumPayment+=allPayments[i];
} 
//check tax include start------------------------
for(let i=0;i<allPayments.length;i++){
    if(allPayments[i]>=3000){
        const tax_Rate = 0.20; // 20%
        const tax_Amount = allPayments[i] * tax_Rate;
        sumPayment -= tax_Amount;
    } 
}
//check tax include end------------------------
const totalSave = sumPayment - livingCost;
if(totalSave>0){
    return totalSave;
}
else if(totalSave>=0){
    return totalSave; 
}
else{
    return "earn more";
}
      
}

//output segments
const allPayments=[ 1000 , 2000 , 3000 ] ;
const livingCost=5400;
const result=monthlySavings(allPayments,livingCost);
console.log(result);