const resolvedProiseArray = [Promise.resolve(32), Promise.reject(56)];

const anotherPromise = Promise.all(resolvedProiseArray);

console.log(anotherPromise);

setTimeout(() => {
  console.log("Queue is now empty.");
  console.log(anotherPromise);
});

process.on("unhandledRejection", (reason, promise) => {});
