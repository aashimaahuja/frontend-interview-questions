// sum(1)(2)(3)

function sum(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

console.log(sum(1)(2)(3));

function infiniteSum(num) {
  return function (arg) {
    return arg ? infiniteSum(num + arg) : num;
  };
}

console.log(infiniteSum(1)(2)(4)(8)());
