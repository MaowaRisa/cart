console.log('welcome to cart')

const addProduct = () =>{
    const productName = document.getElementById('product-name').value
    const productQty = document.getElementById('product-qty').value

    // Display products
    displayProducts(productName, productQty)

    // Save to Local Storage
    saveToShoppingCart(productName, productQty);

}
const loadProducts = () =>{
    
}
const displayProducts = (product, quantity) =>{
    const ul = document.getElementById('product-container');
    const li = document.createElement('li')
    li.innerText = `${product}: ${quantity}`

    ul.appendChild(li)
}
// Get the shopping cart if exist or create an empty one
const getStoredShoppingCart = () =>{
    const storedCart = localStorage.getItem('cart')
    let cart = {};
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveToShoppingCart = (product, quantity) =>{
    const cart = getStoredShoppingCart();
    cart[product] = quantity;

    // Convert in string before storage
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}
const displayProductsFromLocalStorage = () =>{
    const productsCart = getStoredShoppingCart()
    for(const product in productsCart){
        const quantity = productsCart[product];
        displayProducts(product, quantity);
    }
}
// Display the products form Local storage
displayProductsFromLocalStorage()