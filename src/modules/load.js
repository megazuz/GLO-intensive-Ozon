import { renderGoods } from './renderGoods.js';
import { getData } from './getData.js';
// import { postData } from './postData.js';
// import { deleteData } from './deleteData.js';

export const load = () => {
    getData().then(data => renderGoods(data));
}