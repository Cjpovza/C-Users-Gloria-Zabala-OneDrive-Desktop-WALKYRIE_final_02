const { addToSessionStorage, updateCartCount } = require('./cart');

describe('Funciones del carrito', () => {
    beforeEach(() => {
        sessionStorage.clear();
        document.body.innerHTML = <div id="contador-productos">0</div>;
        window.alert = jest.fn();
    });

    test('debe agregar un producto al sessionStorage', () => {
        const product = { name: 'Nike Dunk Low Oil Green', price: '$100', image: 'img/Nike Dunk Low Oil Green.jpg' };
        addToSessionStorage(product);

        const cart = JSON.parse(sessionStorage.getItem('cart'));
        expect(cart).toHaveLength(1);
        expect(cart[0]).toEqual(product);
    });

    test('debe actualizar el contador de productos', () => {
        const product = { name: 'Nike Dunk Low Oil Green', price: '$100', image: 'img/Nike Dunk Low Oil Green.jpg' };
        addToSessionStorage(product);
        updateCartCount();

        expect(document.getElementById('contador-productos').textContent).toBe('1');
    });
});