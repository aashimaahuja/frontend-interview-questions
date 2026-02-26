Array.prototype.myMap = function (callback, thisArg) {
  let res = [];
  let arr = this;

  for (let i = 0; i < arr.length; i++) {
    res[i] = callback.call(thisArg, arr[i], i, arr);
  }

  return res;
};

console.log([1, 2, 3, 4].myMap((num) => num * 2));
console.log([1, 2, 3].myMap(String));
const users = [
  { name: "A", age: 20 },
  { name: "B", age: 25 },
];
console.log(users.myMap((user) => user.name));
