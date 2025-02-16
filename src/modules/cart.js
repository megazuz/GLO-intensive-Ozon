import { renderCart } from './renderCart.js';
import { postData } from './postData.js';

export const cart = () => {
    const cartBtn = document.getElementById('cart');
    const cartCounter = cartBtn.querySelector('.counter');
    const cartModal = document.querySelector('.cart');
    const cartModalClose = cartModal.querySelector('.cart-close');
    const cartPriceTotal = cartModal.querySelector('.cart-total > span');
    const goodsWrapper = document.querySelector('.goods');
    const cartWrapper = cartModal.querySelector('.cart-wrapper');
    const cartSendBtn = cartModal.querySelector('.cart-confirm');

    localStorage.getItem('cart') ? cartCounter.textContent = JSON.parse(localStorage.getItem('cart')).length : cartCounter.textContent = 0;

    const openCart = () => {
        const cart = localStorage.getItem('cart') ?
           JSON.parse(localStorage.getItem('cart')) : [];
        cartModal.style.display = 'flex';
        renderCart(cart);
        cartPriceTotal.textContent = cart.reduce((sum, goodItem) => {
            return sum + goodItem.price;
        }, 0);
    };

    const closeCart = () => {
        cartModal.style.display = '';
    };

    cartBtn.addEventListener('click', openCart);
    cartModalClose.addEventListener('click', closeCart);

    goodsWrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-primary')) {
            const card = event.target.closest('.card');
            const key = card.dataset.key;
            const goods = JSON.parse(localStorage.getItem('goods'));
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
            const goodItem = goods.find((item) => {
                console.log(key);
                return item.id === +key;
            });
            cart.push(goodItem);
            localStorage.setItem('cart', JSON.stringify(cart));
            cartCounter.textContent = JSON.parse(localStorage.getItem('cart')).length;
        };
    });

    cartWrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-primary')) {
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
            const card = event.target.closest('.card');
            const key = card.dataset.key;
            const index = cart.findIndex((item) => {
                return item.id === +key;
            });
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            cartPriceTotal.textContent = cart.reduce((sum, goodItem) => {
                return sum + goodItem.price;
            }, 0);
            renderCart(cart);
            cartCounter.textContent = JSON.parse(localStorage.getItem('cart')).length;
        };
    });

    cartSendBtn.addEventListener('click', () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        postData(cart).then(() => {
            localStorage.removeItem('cart');
            cartPriceTotal.textContent = 0;
            renderCart([]);
            cartCounter.textContent = 0;
        });
    })
};