let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: 'Kit Kats', price: 3.50},
    {product: 'Sour Patch', price: 5.50},
    {product: 'Snickers', price: 2.50},
    {product: 'WarHeads', price: 3.25},
    {product: 'Hersheys', price: 2.25},
    {product: 'Reeses', price: 2.50}
];

const under4 = products.filter((item) => item.price < 4);
under4.forEach((item) => console.log(item.price));
console.log('---');

const mms = products.filter((item) => item.product.indexOf('M&Ms') !== -1);
mms.forEach((item) => console.log(item.product));

console.log('---');
const foundFish = products.find((item) => item.product === 'Swedish Fish');
    if (foundFish) {
        console.log('yes found');
    } else{
        console.log('not in stock');
    }

//function lessThanFour(item.price) {
   // if (item.price < 4.00) {
        //return true;
    //}
    //else {return false;}
//}
//let fourOrLess = item.price.filter(lessThanFour);

   