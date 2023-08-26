// Event Loop ->

// JS -> single threaded language
// default -> synchronous language

// synchronous - blocking
// asynchronous behaviour (non-blocking) => eventloop

// console.log() callstack eventqueue micro-taskqueue (Promise) / macro-taskQueue ()
// function

// billing -> food prepare -> eat -> out

billing - food - eat - out;
billing - food - eat - out;

function myFunc1(param1, param2) {
  console.log("myFunc1 is called...");
  param1();
  param2();
}

function myFunc2() {
  console.log("myFunc2 is called...");
}

// Callback -> when a function takes another function as an argument

var userObj = {
  name: "",
  age: 10,
  skills: [],
  getInfo: () => {},
};

// Reason -> if you want to execute certain function after some events or some execution

async function register(
  emailValidation,
  userValidation,
  passwordValidation,
  addUser
) {
  await emailValidation();
  await userValidation();
  await passwordValidation();
  await addUser();
}

function emailValidation() {}

function userValidation() {}

function passwordValidation() {}

function addUser() {}

// Disadvantages
//  Callback Hell
// Error handling is difficult in callback function
// If any callback func gets error, it will affect the entire line up.

// Nested Callback -> Callback Hell

function nestedCallback1(callback) {
  setTimeout(() => {
    document.getElementById("myContainer").innerHTML =
      "<h1>Happy Independence Day!</h1>";
  }, 1000);
  callback();
}

function nestedCallback2(callback) {
  setTimeout(() => {
    document.getElementById("myContainer").innerHTML = "<h1>1</h1>";
  }, 1000);

  callback();
}

function nestedCallback3(callback) {
  setTimeout(() => {
    document.getElementById("myContainer").innerHTML = "<h1>2</h1>";
  }, 1000);

  callback();
}

function nestedCallback4(callback) {
  setTimeout(() => {
    document.getElementById("myContainer").innerHTML = "<h1>3</h1>";
  }, 1000);
  callback();
}

function nestedCallback5() {
  setTimeout(() => {
    document.getElementById("myContainer").innerHTML = "<h1>4</h1>";
  }, 1000);
}

function myTimerFunction() {
  // Asynchronous Operation -> non blocking -> parallel execution
  setTimeout(() => {
    console.log("Hellloooooo after Timeout");
  }, 3000);
  console.log("Above function is the timeout function");
}

// DS

// ARRAY ->
// QUEUE ->
// STACK ->
// LINKED LIST ->
// MAP ->
// TREE ->
// HEAP ->
// GRAPH ->

// ALGO

{
  key: value;
}
