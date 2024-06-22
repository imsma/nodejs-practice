const resolvedProiseArray = [Promise.resolve(2), Promise.resolve(5)];

const anotherPromise = Promise.all(resolvedProiseArray);

console.log(anotherPromise);

setTimeout(() => {
  console.log("Queue is now empty.");
  console.log(anotherPromise);
});
