//Assignment 4 code is here 

function password(obj){
    //Unexpected handle start****
    if (typeof obj !== 'object' || !obj.name || !obj.birthYear || !obj.siteName) {
        return "Invalid: Propertise ";
    }
    else if (obj.birthYear<1000){
        return "invalid: Years"
    }
    //Unexpected handle end ****
 const outputString = `${obj.siteName}#${obj.name}@${obj.birthYear}`; // main concept this function ***
 return outputString;
}

//print function value
const inputobj={ name: "toky", birthYear: 1000, siteName: "Facebook" };
const result=password(inputobj);
console.log(result);