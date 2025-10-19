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

export { addToStoredDB, getStoredApp };