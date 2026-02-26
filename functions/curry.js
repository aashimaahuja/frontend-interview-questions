// const join = (a, b, c) => {
//    return `${a}_${b}_${c}`
// }
// const curriedJoin = curry(join)
// curriedJoin(1, 2, 3) // '1_2_3'
// curriedJoin(1)(2, 3) // '1_2_3'
// curriedJoin(1, 2)(3) // '1_2_3'

const curry = function (fn) {
  return function (...args) {
    if (args.length < fn.length) {
      fn.bind(this, ...args);
    } else {
      fn.call(this, ...args);
    }
  };
};

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

curry(join);
