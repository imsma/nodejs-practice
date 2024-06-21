const buffer = new Buffer.from("ImSMA", "utf-8");

buffer.write("Ok");

console.log(buffer);
console.log(buffer.toJSON());
console.log(buffer.toString());

buffer.write("Pakistan");
console.log(buffer.toString());
