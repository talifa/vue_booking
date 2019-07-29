const checkStorage = key => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return window.localStorage.removeItem(key);
  }
};

const saveToStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export default {
  checkStorage,
  saveToStorage
};
