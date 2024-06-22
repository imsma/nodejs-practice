// A promise that is fulfilled with an array of fulfillment values for the input promises,
const promise1 = Promise.all([1, 2, 3]);
// The only input promise is already fulfilled,
// so the returned promise gets fulfilled
const promise2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
// One (and the only) input promise is rejected,
// so the returned promise gets rejected
const promise3 = Promise.all([1, 2, 3, Promise.reject(555)]);

// Using setTimeout, we can execute code after the queue is empty
setTimeout(() => {
  console.log(promise1);
  console.log(promise2);
  console.log(promise3);
});

process.on("unhandledRejection", (reason, promise) => {});
