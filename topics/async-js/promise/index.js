function resolveAfter2Seconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved");
      //   reject("Failure: The promise has failed!");
    }, 2000);
  });
}

async function asyncCall1() {
  console.log("calling asyncCall1");
  const result = await resolveAfter2Seconds();
  console.log("asyncCall1:::", result);
}

function asyncCall2() {
  console.log("calling asyncCall2");

  resolveAfter2Seconds().then((res) => {
    console.log("asyncCall2:::", res);
  });
}

asyncCall1();
asyncCall2();

process.on("unhandledRejection", (reason, promise) => {
  console.log(">>Unhandled Rejection at:", promise, "reason:", reason);
});
