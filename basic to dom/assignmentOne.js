// AssignMent 1 Code Is Here.........................
function calculateMoney(ticketSale){
    if (ticketSale < 0) {
        return "Error.Invalid Number";
    }
const perTicketPrice=120;
const totalSumOfTicketPrice=ticketSale*perTicketPrice; 
const perDayCost=(500+(8*50));
const dailyIncome=totalSumOfTicketPrice-perDayCost;
return dailyIncome;
}

const result=calculateMoney(10);
console.log(result);
