import { openDB } from "idb";

const dbPromise = _ => {
  console.log("sss");
  if (!("indexedDB" in window)) {
    throw new Error("Browser does not support IndexedDB");
  }

  return openDB("VueBookingDB", 1, upgradeDB => {
    upgradeDB.createObjectStore("flightsList");

    if (!upgradeDB.objectStoreNames.contains("flightsList")) {
      upgradeDB.createObjectStore("flightsList");
      console.log("vvvv");
    }
  });
};
const saveToStorage = async (storeName, tasks) => {
  try {
    const db = await dbPromise();
    const tx = db.transaction(storeName, "readwrite");
    const store = tx.objectStore(storeName);
    store.put(tasks, storeName);
    return tx.complete;
  } catch (error) {
    return error;
  }
};
const checkStorage = async storeName => {
  try {
    const db = await dbPromise();
    const tx = db.transaction(storeName, "readonly");
    const store = tx.objectStore(storeName);
    return store.get(storeName);
  } catch (error) {
    return error;
  }
};
export default {
  checkStorage,
  saveToStorage
};
