export const getData = (str) => {
    return fetch(
        `https://glo-ozon-test-bd-default-rtdb.europe-west1.firebasedatabase.app/goods.json?${str ? `search=${str}` : ''}`
        )
    .then(res => res.json());
};