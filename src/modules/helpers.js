export const debounce = (func, ms = 300) => {
    let timerID;

    return (...args) => {
        clearTimeout(timerID);

        timerID = setTimeout(() => func.apply(this, args), ms);
    };
};