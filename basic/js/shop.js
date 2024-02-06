function shopmarket(Shirt,Pant,shoe){
    const singleShirt=2200;
    const singlePant=1800;
    const singleShoe=3200;

    const shirtTotalPrice=Shirt*singleShirt;
    const pantTotalPrice=Pant*singlePant;
    const shoeTotalPrice=shoe*singleShoe;

    const eidMarketTotalPrice=shirtTotalPrice+pantTotalPrice+shoeTotalPrice;
    return eidMarketTotalPrice;
}
const eidMarketTotalPrice =shopmarket(2,2,1);
console.log("Eid Mubarak 2024 Total Shoping Budget is : ",eidMarketTotalPrice);