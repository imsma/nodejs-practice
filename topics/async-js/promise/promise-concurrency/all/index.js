const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  // Both are same
  //   setTimeout(resolve("foo"), 200);
  // Here "foo" is passed as a parameter to resolve function
  setTimeout(resolve, 200, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
