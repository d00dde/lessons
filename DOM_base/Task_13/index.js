// Task_10

const outside = "outside";
const inside = "inside";
const div = `
<div class="${outside}">
    <div class ="${inside}" id="small">
    </div>
</div>
`;
const body = document.querySelector('body');
body.insertAdjacentHTML("afterbegin", div);

const bigObj = document.querySelector(".outside");
const smallObj = document.querySelector(".inside");

bigObj.addEventListener('click', function() {
    console.log ('ouner', this);
});
smallObj.addEventListener('click', function(e) {
    console.log ('inner', this);
    e.stopPropagation();
});

// const secTerm = {
//     one : "секунда",
//     two : "секунды",
//     three : "секунд",
// };
//
// const catTerm = {
//     one : "кот",
//     two : "кота",
//     three : "котов",
// };
//
// function getTerm (number, term) {
//     const lastElemNum = +number.toString().slice(-1);
//     const soLastElemNum = +number.toString().slice(-2, -1);
//
//     console.log(soLastElemNum)
//
//     if (soLastElemNum === 1) {
//         return term.three;
//     }
//
//     if (lastElemNum === 1) {
//         return term.one;
//     }
//     if (lastElemNum > 1 && lastElemNum < 5){
//         return term.two
//     }
//     return term.three;
// };
//
// const count = 54456412;
//
// const result = getTerm(count, secTerm);
// console.log(count,  result);
//
// function termGenerator(term) {
//     const saveTerm = term;
//     return function(number) {
//         const lastElemNum = +number.toString().slice(-1);
//         const soLastElemNum = +number.toString().slice(-2, -1);
//         if (soLastElemNum === 1) {
//             return number + " " + saveTerm.three;
//         }
//         if (lastElemNum === 1) {
//             return number + " " + saveTerm.one;
//         }
//         if (lastElemNum > 1 && lastElemNum < 5){
//             return number + " " + saveTerm.two
//         }
//         return number + " " + saveTerm.three;
//     };
// }
//
// const catsTerm = termGenerator(catTerm);
// const secsTerm = termGenerator(secTerm);
//
// const result_1 = catsTerm(12);
//
// console.log(result_1);
// console.log(catsTerm(7));
// console.log(catsTerm(778951));
// console.log(catsTerm(4));
//
// console.log(secsTerm(12));
// console.log(secsTerm(7));
// console.log(secsTerm(778951));
// console.log(secsTerm(4));

function counterGenerator(init) {
    let count = init;
    return function() {
        // console.log(count++);
        return count++;
    }
}

const counter_1 = counterGenerator(5);
const counter_2 = counterGenerator(-3);

console.log(counter_1());
console.log(counter_1());
console.log(counter_1());

console.log(counter_2());
console.log(counter_2());
console.log(counter_2());

console.log(counter_1());
console.log(counter_1());
console.log(counter_1());

let obj = { a: { b: 4 } };
const some = obj.a;
obj = 42;

