const getStoreBook = () => {
    const storeBookSTR = localStorage.getItem("readList");

    if(storeBookSTR) {
        const storeBookData = JSON.parse(storeBookSTR);
        return storeBookData;
    }
    else {
        return [];
    }
}
const addToStoredDB = (id) => {
        const storedBookData = getStoreBook();

        if(storedBookData.includes(id)) {
            alert('Book already exists in the list!')
        }
        else {
            storedBookData.push(id);
            const data =JSON.stringify(storedBookData);
            localStorage.setItem('readList', data)
        }
}
export {addToStoredDB, getStoreBook};