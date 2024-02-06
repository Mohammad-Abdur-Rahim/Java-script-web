//Use Add And Multiplication To Calculate Wood Requirements

/*
shirt -->2200
pant -->1800
shoe -->3200
*/
function woodquantity(chair,table,bed){
    const perchair=3;
    const pertable=10;
    const perbed=50;

    const chairtotalw00d=chair*perchair;
    const tabletotalw00d=table*pertable;
    const bedtotalw00d=bed*perbed;

    const totalwood=chairtotalw00d+tabletotalw00d+bedtotalw00d;
    return totalwood;
}
const wood=woodquantity(1,0,1);
console.log("wood need",wood);
