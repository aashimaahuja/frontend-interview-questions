// Promise.all returns array of resolved promises in the same order. If one promise fails → everything fails.

function all(promises) {
  const res = [];
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve(res);
    }
    for (let i = 0; i < promises.length; i++) {
      let promise = promises[i];
      if (!(promises[i] instanceof Promise)) {
        promise = Promise.resolve(promise);
      }
      promise
        .then((data) => {
          res[i] = data;
          if (res.length === promises.length) {
            resolve(res);
          }
        })
        .catch((err) => reject(err));
    }
  });
}
all();
