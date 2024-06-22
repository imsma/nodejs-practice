const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 700, "two");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "rejected3");
});

const promiseArray = [promise1, promise2, promise3];

Promise.race(promiseArray)
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
