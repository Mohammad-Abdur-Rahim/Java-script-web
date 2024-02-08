//Assignment 5 code is here 
function monthlySavings(allPayments,livingCost){
    let sumPayment=0;
for(let i=0;i<allPayments.length;i++){
    sumPayment=sumPayment+allPayments[i]; 
    if(allPayments[i]>3000){
            const tax_Rate = 0.20; // 20%
            const tax_Amount = allPayments[i] * tax_Rate;
            const totalSave=sumPayment-tax_Amount;
            return  totalSave;
        }
      
    
}
return totalSave;

  
}



const allPayments=[100,200,300,4000];
const livingCost=12000;
const result=monthlySavings(allPayments,livingCost);
console.log(result);

// if(allPayments[i]>3000){
//     const tax_Rate = 0.20; // 20%
//     const tax_Amount = allPayments[i] * tax_Rate;
//     return tax_Amount;
// }