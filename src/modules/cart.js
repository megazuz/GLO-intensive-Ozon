'use strict';

export const cart = () => {
    const cartBtn = document.getElementById('cart');
    const cartModal = document.querySelector('.cart');
    const cartModalClose = cartModal.querySelector('.cart-close');

    const openCart = () => {
        cartModal.style.display = 'flex';
    };
    const closeCart = () => {
        cartModal.style.display = '';
    };

    cartBtn.addEventListener('click', openCart);
    cartModalClose.addEventListener('click', closeCart);
};