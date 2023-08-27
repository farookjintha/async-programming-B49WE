// for, for..in, for..of, forEach

let myArray = [
  {
    name: "John",
    city: "Chennai",
  },
  {
    name: "Karthik",
    city: "Coimbatore",
  },
  {
    name: "Arjun",
    city: "Trichy",
  },
  {
    name: "Priya",
    city: "Madurai",
  },
];

// forEach -> array function , which iterates each element in an array but doesnt return anything
// forEach -> ARRAY
myArray.forEach((obj) => {
  console.log("Name: ", obj.name);
  console.log("City: ", obj.city);
});

// for(initialization; condition; incrementation/decrementation){

// }

// for -> ARRAY
for (let i = 0; i < 10; i++) {
  console.log("I: ", i);
}

for (let index = myArray.length - 1; index >= 0; index--) {
  console.log("NEW USER:");
  console.log("NAME: ", myArray[index].name);
  console.log("CITY: ", myArray[index].city);
}

// for..in -> ITERATE EACH INDEX FROM THE ARRAY
// for..in -> ITERATE EACH KEY FROM THE OBJECT
// for...in -> ARRAY & OBJECT
for (let index in myArray) {
  console.log("For in values:  ", index);
}

let userDetails = {
  name: "Farook",
  city: "Chennai",
  profession: "IT Profesional",
};

for (let key in userDetails) {
  console.log("USER DETAILS : KEY: ", key);
}

// for..of -> ITERATE EACH VALUE FROM THE ARRAY

// for..of => ARRAY , (not for object)
for (let user of myArray) {
  console.log("For of values:  ", user);
}

// ERROR
// for (let value of userDetails) {
//   console.log("FOR OF OBJECT: ", value);
// }

// console.log("KEYS IN USERDETAILS: ", Object.keys(currencies)); //['USD' ,'INR']
