function fileConversion() {
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("File has been converted successfully.");
      //   reject("Error while converting....");
    }, 7000);
  });

  return myPromise;
}

// fileConversion()
//   .then((data) => {
//     console.log("DATA: ", data);
//     console.log("HELLO WORLD");
//     console.log("HOW ARE YOU!");
//   })
//   .catch((error) => {
//     console.log("ERROR: ", error);
//   });

//ASYNC / AWAIT

// try..catch

// ASYNC  in NORMAL FUNCTION
async function getResults() {
  try {
    const result = await fileConversion();
    console.log("RESULT: ", result);
    console.log("HELLO WORLD");
    console.log("HOW ARE YOU!");
  } catch (error) {
    //ERROR HANDLING
    console.log("ERROR: ", error);
  }
}

// ASYNC in ARROW FUNCTION
const myFunc = async () => {
  try {
    const result = await fileConversion();
    console.log("RESULT: ", result);
    console.log("HELLO WORLD");
    console.log("HOW ARE YOU!");
  } catch (error) {
    //ERROR HANDLING
    console.log("ERROR: ", error);
  }
};

// ASYNC IN ANONYMOUS FUNCTION

(async () => {
  try {
    const result = await fileConversion();
    console.log("RESULT: ", result);
    console.log("HELLO WORLD");
    console.log("HOW ARE YOU!");
  } catch (error) {
    //ERROR HANDLING
    console.log("ERROR: ", error);
  }
})();

(async function () {
  try {
    const result = await fileConversion();
    console.log("RESULT: ", result);
    console.log("HELLO WORLD");
    console.log("HOW ARE YOU!");
  } catch (error) {
    //ERROR HANDLING
    console.log("ERROR: ", error);
  }
})();

// async function getResults() {
//   const result = await fileConversion();
//   console.log("RESULT: ", result);
//   console.log("HELLO WORLD");
//   console.log("HOW ARE YOU!");
// }

// getResults();

myFunc();
