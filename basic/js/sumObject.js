//Calculate The Total Cost Of The Products In A Shopping Cart

function shoppingTotal(product){
    let sum=0;
for(const prod of product){
  sum=sum+prod.price;
}
return sum;
}







const product=[
    {name:'Shirt',price:2200},
    {name:'Pant',price:1800},
    {name:'shoe',price:3200},
]
const totalprice=shoppingTotal(product);
console.log('Total cost :',totalprice);