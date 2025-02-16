import { renderGoods } from './renderGoods.js';
import { getData } from './getData.js';
import { searchFilter } from './searchFilter.js';
import { debounce } from './helpers.js';

export const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input');

    const debounceSearch = debounce((event) => {
        getData().then((data) => {
            renderGoods(searchFilter(data, event.target.value));
            console.log('GOODS ' + event.target.value + ' SEARCHED');
        });
    }, 1000);

    searchInput.addEventListener('input', debounceSearch);         
}