import { renderGoods } from './renderGoods.js';
import { getData } from './getData.js';
import { searchFilter } from './searchFilter.js';

export const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input');

    searchInput.addEventListener('input', (event) => {
        const value = event.target.value;
        getData().then((data) => {
            renderGoods(searchFilter(data, value));
            console.log('GOODS ' + value + ' SEARCHED');
        });
    });
    
}