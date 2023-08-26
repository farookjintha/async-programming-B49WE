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

async function getTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const data = await response.json();

    console.log("TODO RESULT: ", data);
  } catch (error) {
    console.log("ERROR: ", error);
  }
}

getTodo();
