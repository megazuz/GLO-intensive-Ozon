export const postData = () => {
    return fetch('https://glo-ozon-test-bd-default-rtdb.europe-west1.firebasedatabase.app/goods.json', { 
        method: 'POST',
        body: JSON.stringify({
            title: "Игровая приставка Sony PlayStation 5",
            price: 79990,
            sale: true,
            img: "https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg",
            hoverImg: "https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg",
            category: "Игровая приставка"
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(res => res.json())
};