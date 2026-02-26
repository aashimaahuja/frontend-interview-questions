function debounce(callback, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

console.log("Test 1: Should execute after 1 second");

const debouncedFn = debounce((msg) => {
  console.log("Executed:", msg);
}, 1000);

debouncedFn("Hello World");

console.log("Waiting...");
