// sort ing array way

const numbers1=[99,33,44,55,1,2,3,44];
const numbers2=[99,33,44,55,1,2,3,44];
const numsort1 = numbers1.sort(function(a,b){return a-b}); //assending
const numsort2 = numbers2.sort(function(a,b){return b-a}); //desending

console.log(numsort1);
console.log(numsort2);