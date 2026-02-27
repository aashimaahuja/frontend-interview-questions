// [1,,3,4].reduce((ac,cv) => ac+cv,initialValue)

Array.prototype.myReduce = function (callback, initialValue) {
  const arr = this;
  let start = initialValue ? 1 : 0;
  initialValue = initialValue || arr[0];

  let ac = initialValue;

  for (let i = start; i < arr.length; i++) {
    ac = callback(ac, arr[i]);
  }

  return ac;
};

// 1. Basic Sum with Initial Value
console.assert(
  [1, 2, 3, 4].myReduce((acc, curr) => acc + curr, 0) === 10,
  "Test 1 Failed",
);

// 2. Sum Without Initial Value
console.assert(
  [1, 2, 3, 4].myReduce((acc, curr) => acc + curr) === 10,
  "Test 2 Failed",
);

// 3. Empty Array With Initial Value
console.assert(
  [].myReduce((acc, curr) => acc + curr, 5) === 5,
  "Test 3 Failed",
);
