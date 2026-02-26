function throttle(fn, delay) {
  let isBlocked = false;
  let lastArgs = null;
  return function process(...args) {
    if (!isBlocked) {
      fn.apply(this, args);
      isBlocked = true;
      setTimeout(() => {
        isBlocked = false;
        if (lastArgs) {
          process(lastArgs);
        }
      }, delay);
    } else {
      lastArgs = args;
    }
  };
}
