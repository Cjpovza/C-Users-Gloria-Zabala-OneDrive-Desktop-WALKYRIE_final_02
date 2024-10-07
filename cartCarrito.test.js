import { displayCartProducts } from './cart';

describe('displayCartProducts', () => {
    beforeEach(() => {
        sessionStorage.clear(); // Limpiar el sessionStorage antes de cada prueba
    });

    test('debe retornar un mensaje de carrito vacío cuando no hay productos', () => {
        const result = displayCartProducts([]);
        expect(result.message).toBe('El carrito está vacío');
        expect(result.subtotal).toBe(0);
    });

    test('debe calcular el subtotal correctamente con productos en el carrito', () => {
        const cart = [
            { name: 'Producto 1', price: '$10.000', quantity: 2 },
            { name: 'Producto 2', price: '$20.000', quantity: 1 }
        ];
        const result = displayCartProducts(cart);
        expect(result.subtotal).toBe(40000); // $10,000 * 2 + $20,000 * 1
    });
});
