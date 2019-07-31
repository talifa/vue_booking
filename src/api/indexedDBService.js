/* eslint-disable */
import { openDB } from 'idb'

(() => {
  'use strict'
  if (!('indexedDB' in window)) {
    console.warn('IndexedDB not supported')
    return;
  }
})()
const dbPromise = async () => {
  if (!('indexedDB' in window)) {
    throw new Error('Browser does not support IndexedDB')
  }

  return await indexedDB.open('Booking', 1, upgradeDb => {
    if (!upgradeDb.objectStoreNames.contains('flightsList')) {
      upgradeDb.createObjectStore('flightsList')
    }


  })
}
// const dbPromise = openDB('Booking', 1);


// dbPromise.onupgradeneeded = function (event) {
//   var db = event.target.result;

//   return db.createObjectStore("flightsList", { keyPath: "taskTitle", autoIncrement: true });

// };


const checkStorage = async storeName => {
  const db = await dbPromise()
    .then(() => {
      const tx = db.transaction(storeName, 'readonly')
      const store = tx.objectStore(storeName)
      return store.get(storeName)
    }).then(() => {
      console.log('checkStorage complete')
    })
    .catch((err) => {
      console.log('checkStorage failed', err)
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
    .catch((err) => {
      console.log('saveToStorage failed', err)
    })
}
export default {
  checkStorage,
  saveToStorage
}