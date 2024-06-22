const p1 = Promise.resolve(3);
const p2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "foo");
});

Promise.allSettled([p1, p2]).then((results) => {
  results.forEach((result) => {
    console.log(result.status);
  });
});
