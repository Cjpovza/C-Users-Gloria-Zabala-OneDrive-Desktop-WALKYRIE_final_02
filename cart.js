const productImageNames = {
    "Nike Dunk Low Oil Green": "img1.jpg",
    "Jordan 1 High UNC Toe": "img2.jpg",
    // ... otros productos
};

function addToSessionStorage(product) {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    cart.push(product);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    alert('Producto agregado al carrito');
}

function updateCartCount() {
    const cartItems = JSON.parse(sessionStorage.getItem('cart')) || [];
    const cartCount = cartItems.length;
    document.getElementById('contador-productos').textContent = cartCount;
}

function addToCart(event) {
    const productContainer = event.target.closest('.item');
    const productName = productContainer.querySelector('.info-product h2').textContent;
    const productPrice = productContainer.querySelector('.info-product .price').textContent;
    const productImage = `img/${productName}.jpg`;

    const product = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    addToSessionStorage(product);
}

module.exports = { addToSessionStorage, updateCartCount, addToCart, productImageNames };
