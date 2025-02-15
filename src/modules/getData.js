export const getData = () => {
    return fetch('https://glo-ozon-test-bd-default-rtdb.europe-west1.firebasedatabase.app/goods.json')
    .then(res => res.json());
};