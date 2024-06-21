const fs = require("node:fs");

const readerStream = fs.createReadStream(__dirname + "/f1.txt", {
  encoding: "utf-8",
  highWaterMark: 10,
});
const writerStream = fs.createWriteStream(__dirname + "/f2.txt");

readerStream.on("data", (chunk) => {
  //   console.log(chunk);
  process.stdout.write(chunk);
  let i = 0;
  while (i < 359900000) {
    i++;
  }
  writerStream.write(chunk);
});
