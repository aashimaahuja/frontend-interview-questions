function flat(arr) {
  const res = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      res.push(...flat(item));
    } else {
      res.push(item);
    }
  }
  return res;
}

console.log(flat([1, 2, [3, [4]], [5]]));
console.log(flat([1]));
