function allSettled(promises) {
  let res = [];
  return new Promise((resolve) => {
    promises.forEach((promise, i) => {
      promise
        .then((data) => {
          res[i] = { status: "fulfilled", value: data };
          if (res.length === promises.length) {
            resolve(res);
          }
        })
        .catch((err) => {
          res[i] = { status: "rejected", value: err };
          if (res.length === promises.length) {
            resolve(res);
          }
        });
    });
  });
}

allSettled();
