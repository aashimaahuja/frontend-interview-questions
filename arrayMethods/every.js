// const isBelowThreshold = (currentValue) => currentValue < 40;

// const array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.every(isBelowThreshold));
// Expected output: true
Array.prototype.newEvery = function (callback, thisArg) {
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (!callback.call(this, arr[i], i, arr)) {
      return false;
    }
  }

  return true;
};

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
