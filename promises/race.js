function race(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

race();
