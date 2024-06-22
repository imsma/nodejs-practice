const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "A quick one");
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "A slow one");
});

const promiseArray = [promise1, promise2, promise3];

Promise.any(promiseArray).then((value) => {
  console.log(value);
});
