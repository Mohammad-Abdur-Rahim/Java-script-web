// Find The Cheapest Phone From An Array Of Phone Objects
const mobiles=[
    {name:'iphone',price:122000,camarea:'5mp',color:'red'},
    {name:'samsung',price:32000,camarea:'12mp',color:'black'},
    {name:'vivo',price:22000,camarea:'108mp',color:'white'},
    {name:'oppo',price:28000,camarea:'11mp',color:'green'},
    {name:'redmi',price:18000,camarea:'4mp',color:'yellow'},
]

function lowPricephone(mobiles){
    let min=mobiles[0];
    for(const mobile of mobiles){
    if(mobile.price < min.price){
        min=mobile;
    }

}
return min;
}
const lowest = lowPricephone(mobiles);
console.log(lowest);
