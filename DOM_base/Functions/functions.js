// const arr_1 = [1, 2, 4, 5, 6];
// let result = [];
// function forEach (arr, cb) {
//     for ( let i = 0; i < arr.length; i++) {
//         cb(arr[i], i, arr);
//         result.push(arr[i])
//     }
// }
//
//  function logger (item, idx, arr) {
//      console.log (item, " ", idx, arr);
//  }
//
// forEach (arr_1, logger);
// arr_1.forEach(logger)

const arr_2 = [1, 3, 6 , 45, 10];
const animals = ['lion', 'manky', 'dog', 'cat'];
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

// let resalt =[];
// function angryAnimal (arr) {
//     for (let i=0; i<animals.length; i++) {
//         if (i%2===1) {
//             resalt.push(arr[i] + " is angry")
//         }
//         }
// }
// angryAnimal(animals)
// console.log(resalt)
// const number = [];
// for (let i=3; i<100; i=i+3) {
//     number.push(i)
//
// }
// console.log(number)

// const sum = function (a, b) {
//     return (a+b)
// }
// function calculet (x, y ,cb) {
//     if (typeof cb === "function")
//        return  cb (x,y)
//     }
//     console.log(calculet(4, 7, sum))


// const div = `<div class="cell white">${result_1}</div>`;
// const div_1 = ;


function board (x, y) {
  let result = "";
  for (let i = 0; i < x; i++) {
    let row = "<div class=\"row\">";
    for (let j = 0; j < y; j++) {
     row += `<div class="cell ${1}"></div>`
    }
    row += "</div>"
    result += row
  }
  return result;
}

document.body.insertAdjacentHTML("beforeend", board(8, 8))

















