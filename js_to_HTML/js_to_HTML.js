// // const arr1 = [1, 2, 3, 4];
// // function ForEach (arr, cb) {
// //     for (let i=0; i<arr.length; i++) {
// //         cb (arr[i]);
// //     }
// // }
// // function logger (item) {
// //     console.log (item)
// // }
// // ForEach(arr1, logger)
// //
// // console.log(1)
// //-------------------- Arrey -------------------------
// let dinosaurs = [];
// dinosaurs[0] = "Raptor";
// dinosaurs[1] = "T-Rex";
// dinosaurs[2] = "Velosiraptor";
// dinosaurs[3] = "Stegosaurs";
// dinosaurs[4] = "Triseratops";
// dinosaurs[5] = "Brachiosaurs";
// dinosaurs[6] = "Pteranodon";
// dinosaurs[7] = "Apatosaurus";
// dinosaurs[8] = "Diplidocus";
//
// // dinosaurs[33] = "Pterodaktl";
//
// let dinosaursAndNumbers = [3, "T-Rex", "Diplidocus", ["Velosiraptor","Brachiosaurs", 3654.7], 10,]
// dinosaursAndNumbers[3][0]
// dinosaursAndNumbers[Math.floor(Math.random()*dinosaursAndNumbers.length)]
//
// let bodyPart = [];
//   bodyPart.push("nose");
//   bodyPart.push("head");
//   bodyPart.push("heand");
//   bodyPart.push("ass");
//   bodyPart.push("boll");
//
// let adjective = [];
//   adjective.push("smelly");
//   adjective.push("angry");
//   adjective.push("small");
//   adjective.push("monstrously");
//
// let animals = [];
//   animals.push("manky");
//   animals.push("pig");
//   animals.push("dog");
//   animals.push("hippopotamus");
//   animals.push("horse");
//
// console.log(bodyPart, adjective, animals);
//
// let randomizerBbodyPart = bodyPart[Math.floor(Math.random()*bodyPart.length)];
// let randomizerAdjective = adjective[Math.floor(Math.random()*adjective.length)];
// let randomizerAnimals = animals[Math.floor(Math.random()*animals.length)];
// console.log(randomizerBbodyPart);
// console.log(randomizerAdjective);
// console.log(randomizerAnimals);
//
// let insultWordsArr = ["Your", `${randomizerBbodyPart}`, "is more", `${randomizerAdjective}`, "than a", `${randomizerAnimals}`];
// console.log(insultWordsArr)
// console.log(insultWordsArr.join(" "))
// let insultWordsArrString = insultWordsArr.join(" ");
// console.log(+insultWordsArrString)
// let insultWords = "Your " + `${randomizerBbodyPart}` + " is more " + `${randomizerAdjective}` + " than a " + `${randomizerAnimals}`;
// console.log(insultWords)
//
// //---------------- Object ------------------------
//
// let saha = {};
//   saha.age = 39;
//   saha.height = 180;
//   saha.color_hair = "brown";
//   saha.lakyNumbers = [1, 5, 9];
//
// let ket = {};
//   ket.age = 38;
//   ket.height = 170;
//   ket.color_hair = "white";
//   ket.lakyNumbers = [6, 700, 99];
//
// let leli = {};
// leli.age = 35;
// leli.height = 165;
// leli.color_hair = "bleck";
// leli.lakyNumbers = [777, 3, 75];
// leli.some_arrey = [7, 9, {purpose: "confution", number: 123}, 3.3]
//
//
// console.log(saha, leli, ket)
//
// let peoples = [];
// peoples.push(saha, leli, ket)
// console.log(peoples)
// console.log(peoples[1].lakyNumbers[0])
// console.log(peoples[2].lakyNumbers[2]+=3)
//
// let scores = {
//   ann: 0,
//   den: 0,
//   lelik: 0,
//   seriy: 0
// };
// scores.seriy+=1;
//
// console.log(scores)
// scores.seriy+=1;
// scores.ann+=1;
// console.log(scores)
//
// // let getItem = leli.some_arrey[2].number
// // console.log(getItem)
//
// //----------------Methods of Arrey-----------------
//
// // let sumPrise = 0;
//
// // cars.forEach(car=> sumPrise +=car.prise)
// // console.log(sumPrise)
// //
// // cars.sort((a ,b) => b.reiting - a.reiting )
// // console.log(cars)
// //
// // const MyColor = cars.filter(car => car.color ==='red' || car.color ==='white')
// // console.log(MyColor)
// //
// // const MaxPrise = cars.filter(max => max.prise >=18000)
// // console.log(MaxPrise)
// //
// // const modelPrise = cars.map((key)=>key.model+" " + key.prise + " " + "$")
// // console.log(modelPrise)
// //
// //
// // const sumReiting = cars.reduce((a, b) =>
// //   a + b.reiting, 100
// // );
// // console.log(sumReiting)
//
//
// let cars = [
//   car_1 = {model: 'tesla',
//     age: 2022,
//     color: 'red',
//     prise: 25000,
//     reiting: 10,
//     smart: "yes"
//   },
//   car_2 = {model: 'BMW',
//     age: 2018,
//     color: 'bleck',
//     prise: 18000,
//     reiting: 5,
//   },
//   car_3 = {model: 'Toyota',
//     age: 2020,
//     color: 'red',
//     prise: 12000,
//     reiting: 7,
//   },
//   car_4 = {model: 'Slavuta',
//     age: 2004,
//     color: 'white',
//     prise: 1500,
//     reiting: 11,
//   },
//   car_5 = 0];
//
//
// let indexOfCars = cars.indexOf(car_2)
// console.log(indexOfCars)
//
// let includesCars = cars.includes(car_5)
// console.log(includesCars)
//
// let findCars = cars.filter((car) => car.color === "red")
// console.log(findCars)
//
// let filterCars = cars.filter((car) => car.color === "red")
// console.log(filterCars)
//
// let findIndCars = cars.findIndex((car) => car.color === "white")
// console.log(findIndCars)
//
// let resultForeEach = []
// cars.forEach((elem) => resultForeEach.push(elem.age +2))
// console.log(resultForeEach)
//
// let mapCars = cars.map((key) => "Tere is "+ key.model+" from "+key.prise+" $")
// console.log(mapCars)
//
// let sortCars = cars.sort((a, b) => a.prise - b.prise)
// console.log(sortCars)
//
// let reverseCars = cars.reverse()
// console.log(reverseCars)
//
// let usersName = "Vasya, Petya, Seriy, Horse, Krendel"
// let splitUser = usersName.split(", ")
// console.log(splitUser)
//
// let joinUser = splitUser.join()
// console.log(joinUser)
// console.log(typeof joinUser)
//
// let reduceCars = cars.reduce((a, b) => a + b.prise)
// console.log(`${reduceCars}`+" $")

// --------- Function ---------------------
let bodyTask = ["nose", "ass", "booly", "head", "dick"];
let adjective = ["smoll", "big", "smell", "monstrous"];
let animals = ["pig", "horse", "ship", "sneik", "dog"];

let randomizer = function (arr) {
  let random = arr[Math.floor(Math.random() * arr.length)];
  return random;
}

function heiter (arr_1, arr_2, arr_3, cb) {
  return ("You have "+cb(arr_1)+" "+cb(arr_2)+" as a "+cb(arr_3)+".")
}

console.log(heiter(bodyTask, adjective, animals, randomizer))
// -------------------------------------

//------Гра "ШИБЕНИЦЯ"----------------------------
// let words = [
//   "cher",
//   ];
// let word = words[Math.floor(Math.random()*words.length)];
// console.log(word)
// let answer = [];
//   for(let i=0; i<word.length; i++) {
//   answer[i]=" _ ";
//   };
// let remainingLetters = word.length;
// let tryToEnd = 5;
// while (remainingLetters >0 && tryToEnd > 0){
//   alert(answer.join(" "));
//   let guess = prompt("Guess a letter, or click Cancel to stop playing.")
//   if(guess===null) {
//     break;
//   }
//   if (!validateEnter(guess)) {
//     alert("Enter one letter");
//     continue;
//   }
//   let isEntered = false
//   let isRight = false
//   tryToEnd--
//   for (let j=0; j<word.length; j++){
//     if (answer[j]===guess) {
//       isEntered = true;
//       break;
//     }
//      if (word[j]===guess){
//        isRight =true
//        answer[j]=guess;
//     }
//   }
//   seyResult(isEntered, isRight, tryToEnd);
// }
// if (answer.join("")===word.toString()) {
//   alert(answer.join(""))
//   alert("Good job! The answer was " + word);
// } else {
//   alert("You are a stuped ass, the answer was " + word)
// }
//
// function validateEnter(enter) {
//   if (enter.length !== 1) return false;
//   if (!isNaN(+enter)) return false;
//   return true;
// }
//
// function seyResult(isEntered, isRight, tryToEnd) {
//   const tryMsg = "You have " + tryToEnd + " try!";
//   if (isEntered){
//     return alert("This letter is entered. " + tryMsg);
//   }
//   if (isRight){
//     return alert("Ok, is  right letter. " + tryMsg);
//   }
//   alert("Is not right letter. " + tryMsg);
// }

// ------ Factorial1 --------------------

// function factor(value) {
//   let arrFact =[];
//   for (let i=0; i<value; i++) {
//     arrFact.push(i+1)
//   }
//   let coutFactor = 1;
//   for (let j=0; j<arrFact.length; j++) {
//    coutFactor = coutFactor * arrFact[j]
//   }
// }
// factor(5)
// ------ Factorial2 --------------------
function factor(value) {
  let countFactor =1;
  for (let i=1; i<value+1; i++) {
    countFactor =i*countFactor ;
  }
  return value+"! = "+countFactor;
}
console.log(factor(5))

// ----------SORT----------------
let mixArrey = [7, 15, 4, 25, 100, 3];
function sorting (arr) {
  let chehg =0;
  for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr.length; j++)
    if (arr[i] < arr[j]) {
     chehg = arr[i];
     arr[i] = arr[j];
     arr[j] = chehg;
    }
  }
  return mixArrey
}
console.log(sorting(mixArrey))
// ---------SumEven-----------------------------
function sumEven (value) {
  let sum = 0;
  for(let i=0; i<value; i++) {
    if(i%2) {
      sum = sum+i;
    }
  }
  return sum
}
console.log(sumEven(100))
// -----------------------------------
// --------------Febonachi---------------
let getFebon = function  (value) {
  let feb = 0;
  let febArr = [0, 1,];
  if (value === 0) {
    return febArr[0]
  }
  for (let i = 0; i < value; i++) {
    if (value === 1) {
      return 1
    }
      febArr[i + 2] = febArr[i] + febArr[i + 1];
  }
  return febArr.length
}
console.log(getFebon(5))

// -------Find the buried treasure----------

let getRandomNumber = function (size) {
  return Math.floor(Math.random() * size)
};
let getDistance = function (event, target){
  let diffX = event.offsetX - target.x;
  let diffY = event.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
};
let getDistanceHint = function (distance) {
  if (distance < 10) {
    return "Boiling hot!";
  } else if (distance < 20) {
    return "Realli hot!";
  } else if (distance < 40) {
    return  "Hot!";
  } else if (distance < 80) {
    return "Warm!";
  } else if (distance < 160) {
    return "Cold";
  } else if (distance < 320) {
    return "Really cold!";
  } else {
    return "Freezing!";
  }
};
let width = 600;
let height = 600;
let clicks = 0;

let target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height)
};
let clickMap = document.getElementById("map")
  clickMap.onclick = (function (event) {
  clicks++;
  let distance = getDistance(event, target);
  let distanceHint = getDistanceHint(distance);
  let distanceText = document.getElementById("distance")
  distanceText.innerHTML = distanceHint;
  if (distance < 8){
    alert("Found the treasure in " + clicks + "clicks");
  }
});
// --------------------Recusing---------------------------
function factorialRecurs (num) {
  if (num <= 0){
    return 1;
  }else{
    return num * factorialRecurs(num-1);
  }
};
console.log(factorialRecurs(0))
// -----------------------import----------------------------

import { Users } from "./module.js";
let allUsers = [
 new Users ("Sara", "27", "white"),
 new Users ("Julia", "33", "black"),
 new Users ("Boris", "55", "white"),
 new Users ("Jolli", "36", "white"),
];
console.log(allUsers.some(age => age === "27"))

console.log(allUsers.sort((a, b) => a.age - b.age))

let name = allUsers[1].name
console.log(name)


// ----------------ReturnArreyAloneValue------------
// let arrValue = [1, 2, 2, 3, 4, 5, 2, 6, 6, 3, 3, 6];
//
// function includesOf (arr, search, startIndex) {
//   for (let i=startIndex; i<arr.length; i++) {
//     if (arr[i] === search){
//       return true
//     }
//   }
//   return false
// }
//
// // function includes (arr, search) {
// //   for (let i=0; i<arr.length; i++) {
// //     if (arr[i] === search){
// //       return true
// //     }
// //   }
// //   return false
// // }
//
// function getDuplicates (arr) {
//   const duplicates = [];
//   for (let i=0; i<arr.length; i++){
//     if(includesOf(arr, arr[i], i+1 )) {
//       if(!includes(duplicates, arr[i])) {
//         duplicates.push(arr[i]);
//       }
//     }
//   }
//   return duplicates;
// }
//
// console.log(getDuplicates(arrValue))
//
// function returnAloneValue (arr) {
//   let arrayAloneValue = []
//   for (let i=0; i<arr.length; i++){
//     console.log("arrayAloneValue: ", arrayAloneValue)
//     console.log("arr[i]: ", arr[i])
//     console.log("includes: ", includes(arrayAloneValue, arr[i]))
//     if (!includes(arrayAloneValue, arr[i])){
//       console.log("PUSH! ", arr[i])
//       arrayAloneValue.push(arr[i])
//     }
//     console.log("------------------------")
//   }
//   return arrayAloneValue
// }
// console.log(returnAloneValue(arrValue))

// -----------------------sortArreyVele------------------

let startArr = [1, 3, 3, 7, 5, 6, 5, 9, 7, 8];
let objResult = {};

function includes (arr, search) {
  for (let i=0; i<arr.length; i++) {
    if (arr[i] !== search){
      return true
    }
  }
  return false
}

function liken (arr) {

  for (let i = 0; i < arr.length; i++) {
    console.log(includes(arr, objResult))
    if (includes(arr, objResult)){
      objResult[arr[i]] = 1
    } else {
      objResult[arr[i]] = "1";
    }

  }
  return objResult
}
console.log(liken(startArr))
