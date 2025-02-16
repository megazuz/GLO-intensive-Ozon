export const searchFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase());
    });
}

export const categoryFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return (goodsItem.category === value);
    });
}

export const priceFilter = (goods, min, max) => {
    return goods.filter((goodsItem) => {
        if ((max !== '') && (max === min)) {
            return (goodsItem.price === min);
        }
        if (max > min) {
            return (goodsItem.price >= min) & (goodsItem.price <= max);
        }
        if (max === '') {
            return (goodsItem.price >= min);
        }
        return goodsItem;
    });
}

export const saleFilter = (goods, flag) => {
    return goods.filter((goodsItem) => {
        if (flag) {
            return (goodsItem.sale === true);
        } else {
            return goodsItem;
        };
    });
}