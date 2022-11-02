function some(arr, cb) {

}

function every(arr, cb) {

}

function find(arr, cb) {

}

const users = [
  { name: "lol", age: 5, height: 158, gender: "male" },
  { name: "vas", age: 15, height: 178, gender: "male" },
  { name: "top", age: 18, height: 128, gender: "female" },
  { name: "frt", age: 27, height: 108, gender: "male" },
  { name: "ewq", age: 14, height: 198, gender: "female" },
  { name: "vvbgh", age: 10, height: 148, gender: "male" },
  { name: "sdfs", age: 12, height: 138, gender: "male" },
  { name: "sdfsf", age: 8, height: 188, gender: "female" },
];

console.log(some(users, (user) => user.height > 195)) // true
console.log(some(users, (user) => user.height > 200)) // false

console.log(every(users, (user) => user.age < 30)) // true
console.log(every(users, (user) => user.age < 25)) // false

console.log(find(users, (user) => user.name === "ewq")) //  { name: "ewq", age: 14, height: 198, gender: "female" }
console.log(find(users, (user) => user.name === "aaa")) //  undefined
