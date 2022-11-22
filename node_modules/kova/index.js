const kova = (object, key, value) => {
  const rec = obj => {
    for (let i in obj) {
      if (obj[i] == key) {
        obj[i] = value;
      }

      if (typeof obj[i] == 'object') rec(obj[i]);
    }
  };

  rec(object);

  return object;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = kova;
} else {
  window.kova = kova;
}
