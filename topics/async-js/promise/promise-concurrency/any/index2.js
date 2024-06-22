// Promise.any() rejects with an AggregateError if no promise fulfills.
const failure = new Promise((resolve, reject) => {
  reject("Always fails");
});

Promise.any([failure]).catch((err) => {
  console.log(err);
});
