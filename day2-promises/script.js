// Promises -> are used to handle asynchronous operation (Non-Blocking)

// asynchronous -> synchronous

// function greetings() {
//   setTimeout(() => {
//     console.log("Happy Weekend!");
//   }, 3000);
// }

// greetings();
// console.log("Hello World!");

// ASYNCHRONOUS

// function declaration
// calling the greetings func; -> setTimeout() starts
// console.log() -> Hello World
// setTimeout() ends -> Happy Weekend

// Hello World
// Happy Weekend

// Happy Weekend
// Hello World

//SYNCHRONOUS -> Promise

// Three States in Promise

// 1: pending -> processing
// 2: resolved / fulfilled -> success
// 3: rejected -> failed

// To create a promise Ex: file upload, db operation, scanning the document, API calls etc.....
// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("File has been converted successfully.");
//     // reject("Error");
//   }, 7000);
// });

// // // console.log(myPromise);

// // // Promise Chaining -> handling the promise
// myPromise
//   .then((data) => {
//     console.log("On Success: ", data);
//     let newProm = new Promise((resolve, reject) => {
//       resolve("Helllooooooo");
//     });
//     return newProm;
//   })
//   .then((data) => {
//     console.log("DATA: ", data);
//   })
//   .catch((error) => {
//     console.log("On Failure: ", error);
//   })
//   .finally(() => {
//     console.log("Promise has been completed.. ");
//   });

// callback -> to handle promises;
// .then() -> handle sucess scenarios
// .catch -> handle error scenarios

// PROMISE CHAINING

// .then() -> success
// .catch() -> failure
// .finally() -> irrespective of success or failure

// MULTIPLE PROMISE -> Promise.all();

// let promise1 = new Promise((resolve, reject) => {
//   resolve("Hello World 1");
// });

// let promise2 = new Promise((resolve, reject) => {
//   //   reject("Hello world 2");
//   let myProm = new Promise((resolve, reject) => {
//     resolve("NESTED PROMISE");
//   });

//   resolve(myProm);
// });

// let promise3 = new Promise((resolve, reject) => {
//   resolve("Hello world 3");
// });

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log("VALUES: ", values);
//   })
//   .catch((error) => {
//     console.log("ERROR: ", error);
//   });

//   promise2 -> nested1 -> nested2 -> nested3

// API CALL

// XMLHTTPRequest
// fetch()

// fetch().then().then().catch();

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log("DATA: ", data);
//   })
//   .catch((error) => {
//     console.log("ERROR: ", error);
//   });

let usersData = fetch("https://jsonplaceholder.typicode.com/users");

console.log("USERS: ", usersData);

// FETCH
//   1. fetch(url) -> 2. returns Response (Information) ->  json() -> data
