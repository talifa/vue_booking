/* eslint-disable */
import { openDB } from 'idb'

(() => {
  'use strict'
  if (!('indexedDB' in window)) {
    console.warn('IndexedDB not supported')
    return;
  }
})()

// const dbPromise1 = async () => {
//   await openDB('Booking', 1, upgradeDB => {
//     if (!upgradeDB.objectStoreNames.contains('flightsList')) {
//       upgradeDB.createObjectStore('flightsList')
//     }
//   }).then(db => console.log('create', db.objectStoreNames))
// }
async function dbPromise() {
  const db = await openDB('Booking', 1, upgradeDB => {
    upgradeDB.createObjectStore('flightsList')

    if (!upgradeDB.objectStoreNames.contains('flightsList')) {
      upgradeDB.createObjectStore('flightsList')
    }
  }).then(db => console.log('create', db));
}
const checkStorage = async storeName => {
  const db = await dbPromise()
    .then(() => {
      const tx = db.transaction(storeName, 'readonly')
      const store = tx.objectStore(storeName)
      return store.get(storeName)
    }).then(() => {
      console.log('checkStorage complete')
    })
    .catch(() => {
      console.log('checkStorage failed')
    })

}




const saveToStorage = async (storeName, tasks) => {
  const db = await dbPromise()
    .then(() => {
      const tx = db.transaction(storeName, 'readwrite')
      const store = tx.objectStore(storeName)
      store.put(tasks, storeName)
      return tx.complete
    }).then(() => {
      console.log('saveToStorage complete')
    })
    .catch(() => {
      console.log('saveToStorage failed')
    })
}
export default {
  checkStorage,
  saveToStorage
}