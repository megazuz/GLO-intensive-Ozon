export const cart = () => {
    const cartBtn = document.getElementById('cart');
    const cartModal = document.querySelector('.cart');
    const cartModalClose = cartModal.querySelector('.cart-close');
    const cartModalConfirm = cartModal.querySelector('.cart-confirm');

    const openCart = () => {
        cartModal.style.display = 'flex';
    };
    const closeCart = () => {
        cartModal.style.display = '';
    };

    const confirmCart = () => {
        cartModal.style.display = '';
    };

    cartBtn.addEventListener('click', openCart);
    cartModalClose.addEventListener('click', closeCart);
    cartModalConfirm.addEventListener('click', confirmCart);
};