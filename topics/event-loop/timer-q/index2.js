setTimeout(() => console.log("setTimeout 1"), 2000);
setTimeout(() => console.log("setTimeout 2"), 5000);
setTimeout(() => console.log("setTimeout 3"), 0);

// process.nextTick(() => {
//   console.log("process.nextTick 1");
// });

// process.nextTick(() => {
//   console.log("process.nextTick 2");
//   process.nextTick(() => {
//     console.log("process.nextTick 2 / inner process.nextTick 1");
//   });
// });

// process.nextTick(() => {
//   console.log("process.nextTick 3");
// });

// Promise.resolve().then(() => {
//   console.log("Promise.resolve 1");
// });

// Promise.resolve().then(() => {
//   console.log("Promise.resolve 2");
//   process.nextTick(() => {
//     console.log("Promise.resolve 2 / inner process.nextTick 1");
//   });
// });

// Promise.resolve().then(() => {
//   console.log("Promise.resolve 3");
// });
