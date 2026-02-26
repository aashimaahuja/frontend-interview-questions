Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis;

  const fn = this;
  const fnSymbol = Symbol();
  context[fnSymbol] = fn;

  const result = context[fnSymbol](...args);
  delete context[fnSymbol];

  return result;
};

Function.prototype.myApply = function (context, args) {
  context = context || globalThis;

  const fn = this;
  const fnSymbol = Symbol();
  context[fnSymbol] = fn;

  const result = context[fnSymbol](...(args || []));
  delete context[fnSymbol];

  return result;
};

Function.prototype.mybind = function (context, ...args) {
  const fn = this;
  return function (...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
};
