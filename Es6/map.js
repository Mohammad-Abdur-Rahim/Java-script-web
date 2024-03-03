const numbers = [1,2,3,4,5];

const doubled =[];
for(const num of numbers) {
    const double = num *2;
    doubled.push(double);
}
console.log(doubled);