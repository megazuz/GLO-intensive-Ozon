export const deleteData = () => {
    return fetch('http://localhost:3000/goods/21', { 
        method: 'DELETE',
    })
    .then(res => res.json())
};