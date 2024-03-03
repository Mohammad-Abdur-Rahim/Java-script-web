const phone={
    name:"iphone xs",
    color:"White",
    price:25000,
    isClean:true,
}
console.log(Object.keys(phone));  //Object Keys find
console.log(Object.values(phone));  //Object values find
console.log(Object.entries(phone));  //Object entries find
delete phone.isClean;
console.log(Object.entries(phone));