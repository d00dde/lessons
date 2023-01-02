// 1
// const a = 5;
// const b = 7;
// sum(a, b);
// function sum(x, y) {
//   console.log( x + y )
// };

// 2
// const a = 5;
// const b = 7;
// const c = 15;
// let sumThree = function(x, y, z) {
//   console.log(x + y + z)
// };
// sumThree(a, b, c)

// 3
// function sumNumbers () {
//   let sumArg = 0;
// for(let i=0; i<arguments.length; i++){
//     sumArg = sumArg + arguments[i]
// }
// console.log(sumArg)
// }
// sumNumbers(1, 5, 10, 20)

// 4
// const a = 5;
// const b = 7;
// const c = 15;
// const d = 4;
// const e = 72;
  
// function max() {
//   let maxArg = arguments[0];
//     for(let i=0; i<arguments.length; i++){
//       if (maxArg <= arguments[i]){
//         maxArg = arguments[i]
//       }
//     }
//     return maxArg
//   }
// console.log(max(a, c), "= 15");
// console.log(max(a, b, c), "= 15");
// console.log(max(a, b, c, d, e), "= 72");

// 5
  // const a = 5;
  // const b = 3;
  // const c = 7;
  // function pow(base, degree) {
  //   if(degree){
  //     return base**degree
  //   }else{
  //     return base**2
  //   }
  // }
  // console.log(pow(a, b), "= 125");
  // console.log(pow(c), "= 49");

  // 6
  // function checkAccess(age, isPermitted) {
  //   if(!isPermitted){
  //     return "= denied"
  //   }
  //   if(isPermitted && age <= 17){
  //     return "= so young"
  //   }
  //   if(isPermitted && age < 41){
  //     return "= success"
  //   }
  //   if(isPermitted && age > 40 ){
  //     return "= so old"
  //   }
  // }
  // console.log(checkAccess(17, true), "= so young");
  // console.log(checkAccess(18, true), "= success");
  // console.log(checkAccess(40, true), "= success");
  // console.log(checkAccess(41, true), "= so old");
  // console.log(checkAccess(17, false), "= denied");
  // console.log(checkAccess(18, false), "= denied");
  // console.log(checkAccess(40, false), "= denied");
  // console.log(checkAccess(41, false), "= denied");

  // 7
  // function includeCount(str, symbol) {
  //   let value = 0;
  //   for (let i = 0; i<str.length; i++) {
  //     if(symbol===str[i]){
  //       value++
  //     }
  //   }
  //   return value
  // }
  // console.log(includeCount("Hello world!", "o"), "= 2");
  // console.log(includeCount("Hello world!", "l"), "= 3");
  // console.log(includeCount("Hello world!", "w"), "= 1");
  // console.log(includeCount("Hello world!", "h"), "= 0");

  // 8
  // function conditionalExecute(num, cb) {
  //   if(num > 10){
  //     cb(num)
  //   }
  // }

  // const logger = (arg) => {
  //   console.log(`Execute with ${arg}`);
  // };
  // conditionalExecute(5, logger); // ничего не выводит в консоль
  // conditionalExecute(12, logger); // в консоли Execute with 12

  // 9
  // function createCount(init) {
  //   if (!init) {
  //     init = 0;
  //   }
  // let count = init;
  // return function () {
  //   return ++count;
  // }
  // }

  // const count_1 = createCount();
  // const count_2 = createCount(5);
  // const count_3 = createCount(10);

  // console.log(count_1(), "= 1");
  // console.log(count_1(), "= 2");
  // console.log(count_1(), "= 3");
  // console.log(count_2(), "= 6");
  // console.log(count_1(), "= 4");
  // console.log(count_3(), "= 11");
  // console.log(count_2(), "= 7");
  // console.log(count_3(), "= 12");
  // console.log(count_1(), "= 5");

// 10
  function logEvenNumbers(num) {
    if (num <=0) {
      return "this number error";
    } else { 
      if(num>0){
        if(num%2===0){
        console.log(num)
        }
        logEvenNumbers(num-1)
      }
    }
  }

  logEvenNumbers(15);
  logEvenNumbers(8);




