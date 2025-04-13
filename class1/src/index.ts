// //types in typescript
// let a: number = 10;

// // types in c++
// // int x = 1;
// console.log(a);

// let username: string = "Ashish";

// function sum(a: number, b: number) {
//   return a + b;
// }

// function runAfter5sec(a: (() => void) | ((name: string) => void)) {
//   setTimeout(a, 5000);
// }

// runAfter5sec(function greeting(name: string) {
//   console.log(`hello ${name}`);
// });
// runAfter5sec(function hello() {
//   console.log("hello");
// });

function greet(user: { name: string; age: number }) {
  console.log(user.name, " ", user.age);
}

greet({
  name: "Ashish",
  age: 21,
});

interface userType {
  firstName: string;
  lastName: string;
  age: number;
}

function greet2(user: userType) {
  console.log(user.firstName, " ", user.lastName, " ", user.age);
}

greet2({
  firstName: "Ashish",
  lastName: "raghuvanshi",
  age: 21,
});
