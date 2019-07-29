import { openDB } from 'idb'

const dbPromise = () => {
  if (!('indexedDB' in window)) {
    throw new Error('Browser does not support IndexedDB')
  }

  return openDB('BookingDB', 1, upgradeDB => {
    if (!upgradeDB.objectStoreNames.contains('flightsList')) {
      upgradeDB.createObjectStore('flightsList')
    }
  })
}

const checkStorage = async storeName => {
  try {
    const db = await dbPromise()
    const tx = db.transaction(storeName, 'readonly')
    const store = tx.objectStore(storeName)

    return store.get(storeName)
  } catch (error) {
    return error
  }
}

const saveToStorage = async (storeName, tasks) => {
  try {
    const db = await dbPromise()
    const tx = db.transaction(storeName, 'readwrite')
    const store = tx.objectStore(storeName)

    store.put(tasks, storeName)

    return tx.complete
  } catch (error) {
    return error
  }
}

export default {
  checkStorage,
  saveToStorage
}