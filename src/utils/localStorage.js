export const getItem = (key) => { //получение данных из локалсторадже
    return localStorage.getItem(key)
}

export const setItem = (key, data) => { //размещение данных в хранилище
    localStorage.setItem(key, data)
}

export const deleteItem = (key) => {
    localStorage.removeItem(key);
}

export const clearLocalStorage = () => localStorage.clear();

