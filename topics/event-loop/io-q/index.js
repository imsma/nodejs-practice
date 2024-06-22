const fs = require("fs");

fs.readFile(__filename, () => {
  console.log("This is readfile 1");
});

process.nextTick(() => console.log("This is process.nextTick 1"));
Promise.resolve().then(() => console.log("This is Promise.resolve 1"));
