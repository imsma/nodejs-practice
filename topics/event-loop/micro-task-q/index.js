console.log("console.log 1");
process.nextTick(() => {
  console.log("This is Process.netTick 1");
});
console.log("console.log 2");
