const user_1 = {
  name: "33333333333",
  age: 10,
}

const user_2 = {
  name: "222222",
  age: 15,
}

const user_3 = {
  name: "111",
  age: 40,
}

const user_4 = {
  name: "4444444444",
  age: 80,
}

const user_5 = {
  name: "55555555",
  age: 13,
}

const users = [user_2, user_3, user_5, user_1, user_4, user_2 ]

users.sort((a, b) => {
  return a.age - b.age;
});

console.log(users);



const arr = Array(300).fill(0).map(() => {
  return Math.floor(Math.random()*100);
});

let count = 0;
function sort(arr, cb) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i; j < arr.length; j++) {
      const temp = arr[j];
      if(cb(arr[i], arr[j]) > 0) {
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

console.log(sort(arr,(a, b) => {
  count++;
  return b - a;
}));

console.log("count: ", count);
