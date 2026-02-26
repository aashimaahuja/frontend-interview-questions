// Waits until the first promise succeeds.
// Only fails if all promises fail.

function any(promises) {
  let rejected = 0,
    errors = [];
  return new Promise((resolve, reject) => {
    promises.forEach((promise, i) => {
      promise
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          rejected++;
          errors[i] = err;
          if (rejected === promises.length) {
            reject(errors);
          }
        });
    });
  });
}

any();
