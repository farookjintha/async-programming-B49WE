// CREATE - POST
// READ - GET
// UPDATE - PUT
// DELETE - DELETE

// GET -> fetch(url).then.then().catch() - To retrieve data
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json));

// POST -> fetch(url, { method: 'POST', body: JSON.stringify(payload), headers: {} }).then.then().catch() -> To create a data
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }), // '{title: 'foo', body: 'bar', userId: 1}'
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// PUT -> fetch(url , {method: 'PUT',  body: JSON.stringify(payload), headers: {} }).then().then().catch() -> To update a data
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify({
    id: 1,
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// DELETE -> fetch(url, {method: 'DELETE'}).then().then().catch() - To delete a data
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
});

// const myFunc1 = () => {
//   return "Hello World";
// };

// const greetings = myFunc1();

// console.log("calling func1: ", greetings);

// const myFunc2 = () => "Happy Weekend";

// const greetings2 = myFunc2();

// console.log("calling func2: ", greetings2);

// const myArr = [1, 2, 3, 4, 5];

// // let result = myArr.map((value) => value * 5);
// let result = myArr.map((value) => {
//   return value * 5;
// });

// console.log("Result: ", result);
