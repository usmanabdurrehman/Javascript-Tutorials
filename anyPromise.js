const promise1 = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve("Promise 1");
  }, 500)
);

const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve("Promise 2");
  }, 1000)
);

Promise.any([promise1, promise2]).then((val) => {
  console.log(val);
});
