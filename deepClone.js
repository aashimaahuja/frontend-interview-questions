const deepClone = (old) => {
  if (Array.isArray(old)) {
    const ret = [];
    old.forEach((o, i) => {
      ret[i] = deepClone(o);
    });
    return ret;
  } else if (typeof old === "object") {
    const ret = {};
    Object.keys(old).forEach((k) => {
      const ele = old[k];
      ret[k] = deepClone(ele);
    });
    return ret;
  } else return old;
};

console.log(deepClone(1));
console.log(deepClone([]));
console.log(deepClone({}));
console.log(deepClone([{}]));
console.log(deepClone({ a: [] }));
console.log(deepClone({ a: [1, 2, 3, 4] }));

const aashima = {
  naman: null,
};
aashima.naman = aashima;
