const products = [
    { name: 'Hp Laptop', price: 55000 },
    { name: 'Asus Laptop', price: 85000 },
    { name: 'I phone 17', price: 505000 },
    { name: 'Watch apple', price: 5000 },
    { name: 'Tab apple', price: 55000 },
    { name: 'Watch', price: 4000 },
    { name: 'Laptop Xd', price: 59000 }
]
function searchProducts(products, searchText) {
    let result = []
    for (const product of products) {
        if (product.name.includes(searchText)) {
            result.push(product)
        }
    }
    return result;
}
console.log(searchProducts(products, 'Laptop'));


function compare(a, b) {
    if (a.toString() === b) {
        return true;
    } else {
        return false;
    }
}


