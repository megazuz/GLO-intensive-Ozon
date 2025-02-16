import { getData } from './getData.js';
import { renderGoods } from './renderGoods.js';
import { priceFilter } from './searchFilter.js';

export const priceMinMax = () => {
    let priceMin = 0.00;
    let priceMax = -1.00;

    const priceMinInput = document.getElementById('min');
    const priceMaxInput = document.getElementById('max');

    priceMinInput.addEventListener('input', (event) => {
        priceMin = +priceMinInput.value;
        if (isNaN(priceMin)) {
            priceMin = 0.00;
        };
        priceMin = +priceMin;
        getData().then((data) => {
            renderGoods(priceFilter(data, priceMin, priceMax));
            console.log('ПОИСК ТОВАРОВ ДОРОЖЕ ' + priceMin + ' р И ДЕШЕВЛЕ ' + priceMax + ' р');
        });
    });

    priceMaxInput.addEventListener('input', (event) => {
        priceMax = +priceMaxInput.value;
        if (isNaN(priceMax) || (priceMax == 0)) {
            priceMax = -1.00;
        }
        priceMax = +priceMax;
        getData().then((data) => {
            renderGoods(priceFilter(data, priceMin, priceMax));
            console.log('ПОИСК ТОВАРОВ ДОРОЖЕ ' + priceMin + ' И ДЕШЕВЛЕ ' + priceMax + ' р');
        });
    });
}