import { getData } from './getData.js';
import { postData } from './postData.js';
// import { deleteData } from './deleteData.js';

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

    getData().then(json => console.log(json));

    const confirmCart = () => {
        cartModal.style.display = '';
    };

    cartBtn.addEventListener('click', openCart);
    cartModalClose.addEventListener('click', closeCart);
    cartModalConfirm.addEventListener('click', confirmCart);
};