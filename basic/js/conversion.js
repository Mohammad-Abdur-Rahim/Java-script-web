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

