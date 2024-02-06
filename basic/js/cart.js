//cart add sum products 
const products=[
    {name:'Shirt',price:2200,quantiy:20},
    {name:'Pant',price:1800,quantiy:12},
    {name:'shoe',price:3200,quantiy:8},
]
function shopsum(product){
    let sum=0;
    for(const product of products){
        //totalCart price equation Start ****************
        const thisproductCost=product.price*product.quantiy;
       sum=sum+thisproductCost;
       //totalCart price equation  End****************
    }
    return sum;

}

const result=shopsum(products);
console.log(result);