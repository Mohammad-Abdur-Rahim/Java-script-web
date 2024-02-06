//three max number find out 

// Big Number 
const n1=1,n2=2,n3=3;
if(n1>n2 && n1>n3){
    console.log("n1 is big number");
}
else if(n2>n1 && n2>n3){
    console.log("n2 is big number");
}else{
    console.log("n3 is big number");
}




//With function Big Number 
function maxnumber(n1,n2,n3){
    if(n1>n2 && n1>n3){
       return n1;
    }
    else if(n2>n1 && n2>n3){
        return n2;
    }else{
        return n3;
    }
}
const result=maxnumber(1,2333443,333);
console.log("Big Number Is : ",result);