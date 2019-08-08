

const flights = 'flightsList';
const storeName = 'flights';


function isAvailableIndexedDb() {
    return window.indexedDB !== undefined;
}

export function getMainDb() {
    return new Promise((resolve, reject) => {
        if (isAvailableIndexedDb) {
            const request = indexedDB.open(flights, 1)
            if (request) {
                request.onerror = (ev) => {
                    reject(new Error(`IDBOpenDBRequest error ${ev.target}`));
                };
                request.onsuccess = (ev) => {
                    resolve(ev.target.result);
                };
                request.onupgradeneeded = (ev) => {
                    createObjectStores(ev.target.result);
                };
            }
        } else {
            reject(new Error(`Your browser does not support IndexedDB`));
        }
    });
}

function createObjectStores(db) {
    return db.createObjectStore(storeName, {
        keyPath: 'id',
        autoIncrement: true,
    });
}
export async function deleteDB() {
    return indexedDB.deleteDatabase(flights);
}

export async function saveflightToStore(flight) {
    const db = await getMainDb();
    if (db.objectStoreNames.contains(flight.name)) {
        return;
    }
    const request = db
        .transaction(storeName, 'readwrite')
        .objectStore(storeName)
        .add(flight);
    request.onerror = (ev) => {
        throw new Error(`IDBRequest error ${ev.target}`);
    };
}


export async function getAllFlights() {
    const db = await getMainDb();
    const data = await getAllDataFromIDB(db, storeName);
    return data;
}



export function getAllDataFromIDB(db, objStore) {
    return new Promise((resolve, reject) => {
        const request = db.transaction(objStore, 'readonly')
            .objectStore(objStore).getAll();
        request.onsuccess = (ev) => {
            resolve(ev.target.result);
        };
        request.onerror = (ev) => {
            reject(new Error(`Get all data request error ${ev.target}`));
        };
    });
}

export async function getItemFromStore(id, store) {
    const db = await getMainDb();
    const data = await new Promise((resolve, reject) => {
        const request = db.transaction(store, 'readonly')
            .objectStore(store).get(id);
        request.onsuccess = (ev) => {
            resolve(ev.target.result);
        };
        request.onerror = (ev) => {
            reject(new Error(`Get item by id ${name} from store ${store} cause error ${ev.target}`));
        };
    });
    return data;
}

export async function saveItemToStore(item, store) {
    const db = await getMainDb();
    // eslint-disable-next-line
    const data = await new Promise((resolve) => {
        const request = db
            .transaction(store, 'readwrite')
            .objectStore(store)
            .add(item);
        request.onsuccess = (ev) => {
            const result = (ev.target).result;
            resolve(result);
        };
        request.onerror = (ev) => {
            throw new Error(`Add item by id ${item.id} to store ${store} cause error ${ev.target}`);
        };
    });
}

export async function saveFlightToStore(flight) {
    const existingFlight = getItemFromStore(flight.id, 'flights');
    if (existingFlight) {
        updateExistingFlight(flight);
    } else {
        saveItemToStore(flight, 'flights');
    }
}
export async function updateExistingFlight(flight) {
    const db = await getMainDb();
    const updated = await new Promise((resolve, reject) => {
        const objectStore = db.transaction(['flights'], 'readwrite').objectStore('flights');
        const request = objectStore.get('444-44-4444');
        const onerror = (ev) => {
            reject(new Error(`Update flight id = ${flight.id} request failed ${ev.target}`));
        };
        request.onerror = onerror;
        request.onsuccess = (ev) => {
            const storedFlight = (ev.target).result;
            const updatedFlight = Object.assign({}, storedFlight, flight);
            const requestUpdate = objectStore.put(updatedFlight);
            requestUpdate.onerror = onerror;
            requestUpdate.onsuccess = () => {
                resolve(true);
            };
        };
    });
    return updated;
}

export async function deleteflightFromStore(item) {
    const db = await getMainDb();
    const deleted = await new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, 'readwrite')
            .objectStore(storeName).delete(item.id);
        transaction.onsuccess = () => resolve(true);
        transaction.onerror = transaction.onerror = (ev) => {
            reject(new Error(`Delete flight id = ${item.id} transaction failed ${ev.target}`));
        };
    });
    return deleted;
}




export default {
    getAllFlights,
    saveFlightToStore,
    deleteDB

}