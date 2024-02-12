//Matching Function javascript here
const products =[
    {id:1,name:'iphone iphone',salary:33000},
    {id:2,name:'samsung',salary:33000},
    {id:3,name:'ximio',salary:33000},
    {id:4,name:'redmi',salary:33000},
    {id:5,name:'vivo',salary:33000},
    {id:6,name:'Iphone',salary:33000},
    {id:7,name:'realme',salary:33000},
    {id:8,name:'software',salary:33000},
 

];
function matchingProduct(product,search){
    const matchedProduct=[];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matchedProduct.push(product);
        }
    }
    return matchedProduct;
}
const result = matchingProduct(products,'Iphone');
console.log(result);


