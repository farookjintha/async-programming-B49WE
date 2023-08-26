// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => {
//     let xyz = response.json();
//     console.log("XYZ: ", xyz);
//     return xyz;
//   })
//   .then((data) => {
//     console.log("TODO: ", data);
//   })
//   .catch((error) => {
//     console.log("ERROR: ", error);
//   });

// async function getTodo() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );

//     const data = await response.json();

//     console.log("TODO RESULT: ", data);
//   } catch (error) {
//     console.log("ERROR: ", error);
//   }
// }

// getTodo();

let myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("File1 has been converted successfully.");
    // reject("Error while converting....");
  }, 1000);
});

let myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("File2 has been converted successfully.");
    // reject("Error while converting....");
  }, 1000);
});

let myPromise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("File3 has been converted successfully.");
    // reject("Error while converting....");
  }, 1000);
});

// Promise.all([myPromise1, myPromise2, myPromise3])
//   .then((data) => {
//   console.log('DATA: ', data)
// })
//   .catch((error) => {
// console.log("ERROR: ", error);
// });

async function getAllResults() {
  try {
    let results = await Promise.all([myPromise1, myPromise2, myPromise3]);
    console.log("ALL RESULTS: ", results);
  } catch (error) {
    console.log("ERROR: ", error);
  }
}

getAllResults();
