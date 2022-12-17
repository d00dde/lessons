import {observer} from "../helpers/Observer.js"

class Car {
  constructor( x, y, name ) {
    this.x = x;
    this.y = y;
    this.name = name;

  }
  draw() {
    const carHtml = `<div class="car" id="${this.name}">
<img  src="https://media.istockphoto.com/id/1157655660/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B0%D0%B3%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9-%D1%87%D0%B5%D1%80%D0%B2%D0%BE%D0%BD%D0%B8%D0%B9-%D0%BF%D0%BE%D0%B7%D0%B0%D1%88%D0%BB%D1%8F%D1%85%D0%BE%D0%B2%D0%B8%D0%BA-%D0%BD%D0%B0-%D0%B1%D1%96%D0%BB%D0%BE%D0%BC%D1%83-%D1%82%D0%BB%D1%96-%D0%B2%D0%B8%D0%B4-%D0%B7%D0%B1%D0%BE%D0%BA%D1%83.jpg?s=612x612&w=is&k=20&c=5OSfx1vuawXQ6ZPCLsVQC0wCXe16v3iEajO-wYw-G30=">
</div>`;
    document.body.insertAdjacentHTML("afterbegin", carHtml)
    this.carElement = document.querySelector(`#${this.name}`)

    this.carElement.style.left = `${this.x}px`
    this.carElement.style.top = `${this.y}px`

     addEventListener("keydown", (e)=> {
      if (e.code !== "Space") return

       let intervalID = setInterval(() =>{
         this.carElement.style.left =`${this.x += Math.floor(Math.random() * 50)}px`;
         if (this.x >= 400){
           clearInterval(intervalID)
           console.log(`${this.name} finished!`)
         }
       }, 1000)

        // const div = document.createElement("div")
       console.log(intervalID)
      })

    }

};

let tesla = new Car(20, 20, "tesla");
let nissan = new Car(20, 120, "nissan");
let bmw = new Car(20, 220, "bmw");
let toyota = new Car(20, 320, "toyota");

tesla.draw()
nissan.draw();
bmw.draw();
toyota.draw();



observer.subscribe("start", ()=> console.log("start"))
observer.emit("start")

// ---------------------------------------------------
let startArr = [1, 3, 3, 7, 5, 6, 5, 9, 7, 9];

function likeNum (arr) {
  let objResult = {};
  for (let i=0; i<arr.length; i++){
      if(objResult[arr[i]]) {
        objResult[arr[i]]++
      }else {
        objResult[arr[i]] = 1
      }
    }
  return objResult
}
console.log(likeNum(startArr))
// -------------------------------------------------------
class Gun extends Car {
  constructor(x, y, name) {
    super()
    this.x = x;
    this.y = y;
    this.name = name;
  }
  getGan () {
    const gunHtml = `<div class="gun" id="${this.name}">
        <img src="https://bottega.avalonceltic.com/rep_immagini/prod/1063_11_lrg.jpg">  
    </div>`
    document.body.insertAdjacentHTML("afterend", gunHtml)
    this.gunElement = document.querySelector(`#${this.name}`)
    this.gunElement.style.left = `${this.x}px`
    this.gunElement.style.top = `${this.y}px`
  }
}
let beretta = new Gun (20, 500, "beretta")


console.log(beretta)
beretta.getGan()




let button = document.querySelector(".btn")
console.log(button)
let count = 0;
button.addEventListener("click", () => { count++
console.log(count)
})


function factor (index) {
      if(index <= 0) {
    return 1;
  }else{
  return index * factor(index-1); 
  } 
}
const value = 5;
console.log( `Factorial ${value} = ${factor(value)}`)

// ------------------PROMISE-----------------------------

let myFirstPromise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve(5+3)
  }, 3000);
})

myFirstPromise.then((data)=>{
console.log(data)
})



function validateEnter(enter) {
    return /^[a-z]$/.test(enter);
  }
  console.log(validateEnter("3"))
  console.log(validateEnter("fg3"))
  console.log(validateEnter("-"))
  console.log(validateEnter("*"))
  console.log(validateEnter("t"))
  console.log(validateEnter("я"))
  console.log(validateEnter("er"))

  


// const prom = new Promise ((resolve, reject)=>{
//   document.body.onclick = ()=>{
//     console.log("click")
//     resolve(Date.now())
//   }
//   setTimeout(()=>{
//     console.log("reject")
//     reject("button did't enter")
//   },3000)
// })
// prom.then((data)=>{
//   console.log(data)
// })
// prom.catch((lol)=>{
//   console.log("err")
// })
let z =1;
let x=3;
let y=4;
const myPromis = new Promise ((resolve, reject)=>{
  
  setTimeout(()=>{
      resolve(x + y)
  },3000);
  setTimeout(()=>{
    reject(5+5)
},4000);
})
myPromis.then((kek)=>{
let fif = 5*kek
  console.log(fif)
})
console.log(myPromis)

myPromis.catch((lol)=>{
  console.log("lol")
})


const myProm = new Promise ((resolve, reject) => {
  document.body.onclick = () => {
  let x = 5;
  let y = 6;
  resolve(x+y)
  }
  setTimeout(()=>{
    reject("5s ended")
  },5000)
  })
  
  myProm.then((result) => console.log(result))
  
  















