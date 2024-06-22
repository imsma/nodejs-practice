const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

const promiseArray = [promise1, promise2];

Promise.race(promiseArray).then((value) => {
  console.log(value);
});
