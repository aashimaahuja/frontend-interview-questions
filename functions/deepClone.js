function cloneDeep(data, map) {
  if (data === null || typeof data !== "object") {
    return data;
  }

  if (map.has(data)) {
    return map.get(data);
  }

  if (Array.isArray(data)) {
    let res = [];
    data.forEach((item, i) => {
      res[i] = cloneDeep(item);
    });
    map.set(data, res);
  }

  let res = {};
  Object.keys(data).forEach((key) => {
    res[key] = cloneDeep(data[key]);
  });
  map.set(data, res);

  return res;
}

const obj = { a: { b: 1 } };
const clone = cloneDeep(obj);
console.log(clone);
