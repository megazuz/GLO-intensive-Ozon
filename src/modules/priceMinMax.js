import { getData } from './getData.js';
import { renderGoods } from './renderGoods.js';
import { priceFilter, saleFilter } from './searchFilter.js';

export const priceMinMax = () => {
    let priceMin = '';
    let priceMax = '';

    const priceMinInput = document.getElementById('min');
    const priceMaxInput = document.getElementById('max');
    const saleCheckInput = document.getElementById('discount-checkbox');
    const saleCheckBox = document.querySelector('.filter-check_checkmark');

    priceMinInput.addEventListener('input', (event) => {
        priceMin = +priceMinInput.value;
        getData().then((data) => {
            renderGoods(priceFilter(saleFilter(data, saleCheckInput.checked), priceMin, priceMax));
        });
    });

    priceMaxInput.addEventListener('input', (event) => {
        priceMax = +priceMaxInput.value;
        getData().then((data) => {
            renderGoods(priceFilter(saleFilter(data, saleCheckInput.checked), priceMin, priceMax));
        });
    });

    saleCheckInput.addEventListener('change', () => {
        console.log('change');
        if (saleCheckInput.checked) {
            saleCheckBox.classList.add('checked');
        } else {
            saleCheckBox.classList.remove('checked');
        };
        getData().then((data) => {
            renderGoods(priceFilter(saleFilter(data, saleCheckInput.checked), priceMin, priceMax));
        });
    });
}