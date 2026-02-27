Array.prototype.myFilter = function (callback, thisArg) {
  const arr = this;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }
  return res;
};

console.log([1, 2, 3, 4].myFilter((x) => x > 2));
// Expected: [3, 4]
console.log([1, 2, 3, 4].myFilter((x) => x % 2 === 0));
// Expected: [2, 4]
console.log([1, 2, 3].myFilter((x) => x > 10));
// Expected: []
console.log([1, 2, 3].myFilter((x) => x > 0));
// Expected: [1, 2, 3]
console.log([].myFilter((x) => x > 0));
// Expected: []
