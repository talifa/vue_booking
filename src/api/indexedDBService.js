/* eslint-disable */
import { openDB } from 'idb'

(() => {
  'use strict'
  if (!('indexedDB' in window)) {
    console.warn('IndexedDB not supported')
    return;
  }


})()

const dbPromise = openDB('Booking', 1, upgradeDB => {

  upgradeDB.createObjectStore('flightsList', { keyPath: "id" })
}).then(db => console.log('success createObjectStore'))


const checkStorage = storeName => {
  dbPromise.then((db) => {
    const tx = db.transaction(storeName, 'readonly')
    const store = tx.objectStore(storeName)
    return store.get(storeName)

  })
    .then(() => {
      console.log('checkStorage complete')
    })
    .catch(() => {
      console.log('checkStorage failed')
    })
}

const saveToStorage = (storeName, tasks) => {
  dbPromise.then((db) => {
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