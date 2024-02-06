//12 Inch = 1 Feet
//inch to feet conversion
function inchToFeet(inch){
const feet=parseInt(inch/12);
const remaing_inch=parseFloat(inch%12);
const result=feet+' Feet '+remaing_inch+' Inch';
return result;
}
const mdheight=inchToFeet(75);
console.log(mdheight);

//Miels to kilometer conversion

function mileToKilo(miels){
    const kilometer= miels*(1.60934);
    return kilometer;
}

const resultis=mileToKilo(75);
console.log("75 Miels to kilometer is :"+resultis);

//kilometer to miels converstion
function kiloToMiels(kilo){
    const miels=kilo *(0.62137119);
    return miels;
}
const mresult=kiloToMiels(75);
console.log("75 t kilo to miels is: "+mresult)