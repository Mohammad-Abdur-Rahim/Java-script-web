//Discount code implement in js 
const TShirt_price =5000;
if(TShirt_price>=2000 && TShirt_price<=3000){
//10% discount code
const discount  =TShirt_price*10/100;
const payamount =TShirt_price-discount;
console.log("You Receive 10% Discount :"+payamount);
}
else if(TShirt_price>=3000 && TShirt_price<=5000){
    //20% discount code
    const discount  =TShirt_price*20/100;
    const payamount =TShirt_price-discount;
    console.log("You Receive 20% Discount :"+payamount);
    }
else{
    console.log("You Have no Discount");
}