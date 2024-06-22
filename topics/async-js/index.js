function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
}

// function asyncCall() {
//   console.log("calling");

//   resolveAfter2Seconds().then((res) => {
//     console.log(res);
//   });
// }

asyncCall();
