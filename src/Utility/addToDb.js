const getStoredApp = () => {

    const storedAppSTR = localStorage.getItem("Insatalled");

    if (storedAppSTR) {
        const storeAppData = JSON.parse(storedAppSTR)
        return storeAppData;
    }
    else {
        return [];
    }
}

const addToStoredDB = (id) => {
    const storeAppData = getStoredApp();

    if (storeAppData.includes(id)) {

        return

    }

    else {
        storeAppData.push(id);
        const data = JSON.stringify(storeAppData);
        localStorage.setItem("Insatalled", data)

    }


}


const removeFromStoredDb = id => {
    const storeAppData = getStoredApp();
    const updatedData = storeAppData.filter((appId) => appId !== id);
    localStorage.setItem("Insatalled", JSON.stringify(updatedData));
}

export { addToStoredDB, getStoredApp, removeFromStoredDb };