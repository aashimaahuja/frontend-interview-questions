// const array = [1, 2, 3, 4, 5];

// // Checks whether an element is even
// const even = (element) => element % 2 === 0;

// console.log(array.some(even));
// // Expected output: true

Array.prototype.newSome = function (callback, thisArg) {
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (callback.call(this, arr[i], i, arr)) {
      return true;
    }
  }

  return false;
};

const array = [1, 9, 3, 7, 5];

const even = (element) => element % 2 === 0;
console.log(array.newSome(even));
