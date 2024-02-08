//Assignment 3 code is here
function deleteInvalids(array){
    //Unexpected handle start
    if(!Array.isArray(array)){
        return 'Invalid Array';
    }
    //Unexpected handle end
    let numberArrayonly=[];
    for(let i=0;i<array.length;i++){
        if(typeof array[i]==='number' && !isNaN(array[i])){  //*** main concept this function ***
            numberArrayonly.push(array[i]);
        }
    }
    return numberArrayonly;

}





const array=[1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
const result = deleteInvalids(array);
console.log(result);