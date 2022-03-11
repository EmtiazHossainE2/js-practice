let products = [
    { name: 'Mobile', price: 20000, quantity: 1 },
    { name: 'Pant', price: 400, quantity: 3 },
    { name: 'Shirt', price: 500, quantity: 5 },
    { name: 'shoe', price: 2000, quantity: 2 }
]
let cartTotal = 0;
for (const product of products) {
    let productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);

