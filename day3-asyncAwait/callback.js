// setTimeout(() => {
//   console.log("File has been converted successfully.");
// }, 7000);

// console.log("HELLO WORLD");

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("File has been converted successfully.");
    // reject("Error while converting....");
  }, 7000);
});

myPromise
  .then((data) => {
    console.log("Resolved Data: ", data);
    console.log("HELLO WORLD");
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

// To handle Multiple Promises simultaneously.

// let myPromise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("File1 has been converted successfully.");
//     // reject("Error while converting....");
//   }, 1000);
// });

// let myPromise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("File2 has been converted successfully.");
//     reject("Error while converting....");
//   }, 1000);
// });

// let myPromise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("File3 has been converted successfully.");
//     // reject("Error while converting....");
//   }, 1000);
// });

// Promise.all([myPromise1, myPromise2, myPromise3])
//   .then((data) => {
//   console.log('DATA: ', data)
// })
//   .catch((error) => {
// console.log("ERROR: ", error);
// });

// WHY PROMISES? -> To handle asynchronous(non-blocking) operations (async -> sync)

// TO HANDLE PROMISES: (to get the results(sucess/failure) out of promises)
// 1. Callback (.then and .catch)
// 2. ASYNC/AWAIT
