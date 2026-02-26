function flat(arr, res = []) {
  for (let item of arr) {
    if (Array.isArray(item)) {
      flat([...item], res);
    } else {
      res.push(item);
    }
  }
  return res;
}

console.log(flat([1, 2, [3, [4]], [5]]));
console.log(flat([1]));
