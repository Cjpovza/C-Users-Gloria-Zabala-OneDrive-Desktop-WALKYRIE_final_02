let productoAEliminar;

export function updateCart() {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    sessionStorage.setItem('cart', JSON.stringify(cart));
    return displayCartProducts(cart);
}

export function displayCartProducts(cart) {
    let subtotal = 0;

    if (cart.length === 0) {
        return { message: 'El carrito está vacío', subtotal: 0 };
    }

    cart.forEach((product) => {
        const priceInCOP = parseFloat(product.price.replace('$', '').replace('.', '').replace(',', ''));
        subtotal += priceInCOP * product.quantity;
    });

    return { message: 'Productos mostrados', subtotal };
}
