// AssignMent 1 Code Is Here.........................
function calculateMoney(ticket){
    if (ticket < 0) {
        return "Error.";
    }
const perTicketPrice=120;
const totalSumOfTicketPrice=ticket*perTicketPrice; 
const perDayCost=(500+(8*50));
const dailyIncome=totalSumOfTicketPrice-perDayCost;
return dailyIncome;
}

const result=calculateMoney(10);
console.log(result);
