//Simple Calculator To Call Function Inside A Function

function add(n1,n2){
   
    return n1+n2;
}
function subtract(n1,n2){
   
    return n1-n2;
}
function multi(n1,n2){
   
    return n1*n2;
}


function calculator(a,b,operation){
    if(operation==='add'){
        const result=add(a,b);
        return result;
    }
    else if(operation==='subtract'){
        const result=subtract(a,b);
        return result;
    }
    else if(operation==='multi'){
       
        return multi(a,b);;
    }else{
        return "only add,subtract,multi,calculation allow";
    }
    
}

const result =calculator(5,7,'add');
console.log("Calculator add :",result);
const result2 =calculator(5,7,'subtract');
console.log("Calculator Subtract :",result2);
const result3 =calculator(5,7,'multi');
console.log("Calculator Multi :",result3);