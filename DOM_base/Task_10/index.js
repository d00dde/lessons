//Task_1
// const output = document.querySelector(".output");
// const button = document.querySelector("input");

// button.onclick = () => {
// output.style.backgroundColor = "blue";
// };

//Task_2
// let h1 = document.createElement('h1');
// h1.className = "header";
// h1.innerHTML = "Звголовок";
// document.body.append(h1);
// let button = document.createElement('button');
// button.className = "button";
// button.innerHTML = "get me";
// document.body.append(button);
// button.onclick = () => {
//     h1.innerHTML = "Заголовок изменен";
// };

// Task_3

// let button = document.createElement('button');
// button.className = "button";
// button.innerHTML = "get me";
// document.body.append(button);

// const enter = document.createElement('input');
// enter.innerHTML
// document.body.append(enter);

// const show = document.createElement('input');
// show.innerHTML
// document.body.append(show);

// button.onclick = () => {
// show.value = enter.value;
// };

// Task_4
// const enter = document.createElement('input');
// enter.innerHTML
// document.body.append(enter);

// const show = document.createElement('input');
// show.innerHTML
// document.body.append(show);

// enter.oninput = () => {
// show.value = enter.value;
// };
// Task_5

// let h2 = document.createElement('h2');
// h2.className = "header";
// h2.innerHTML = "Зaголовок";
// document.body.append(h2);

// let output = document.createElement('div');
// output.className = "output";
// document.body.append(output);

// output.onclick = () => {
// let x = event.clientX;
// h2.innerHTML = x;
// };

// Task_6
// let h2 = document.createElement('h2');
// h2.className = "header";
// h2.innerHTML = "Зaголовок";
// document.body.append(h2);

// let output = document.createElement('div');
// output.className = "output";
// document.body.append(output);

// output.onclick = () => {
// let y = event.pageY;
// h2.innerHTML = y;
// };

// Task_7
// let h2 = document.createElement('h2');
// h2.className = "header";
// h2.innerHTML = "Зaголовок";
// document.body.append(h2);

// let output = document.createElement('div');
// output.className = "output";
// document.body.append(output);

// output.onclick = (event) => {
//     if (event.altKey) {
//         let y = event.pageY;
//         h2.innerHTML = y;
//     }
//     else 
//     h2.innerHTML = "Alt не нажат";
    
// };

// Task_8
// let h2 = document.createElement('h2');
// h2.className = "header";
// h2.innerHTML = "Слава Україні!";
// document.body.append(h2);

// let output = document.createElement('div');
// output.className = "output";
// document.body.append(output);

// const output1 = document.querySelector(".output");
// const header = document.querySelector("h2");

// output.addEventListener ("mouseover", chenge);

// function chenge () {
//     h2.innerHTML = "Героям Слава!";
//     output1.style.backgroundColor = "blue";
//     header.style.backgroundColor = "yellow";
//     header.style.color = "blue";
// };
// output.addEventListener ("mouseout", chengeout);

// function chengeout () {
//     h2.innerHTML = "Слава Україні!";
//     output1.style.backgroundColor = "yellow";
//     header.style.backgroundColor = "blue";
//     header.style.color = "yellow";
// };

// const clas ="super"
// const div = `
//     <div class="${clas}">
//         ${new Date().toISOString()}
//     </div>
//     `;
// output.insertAdjacentHTML("afterbegin", div);

// Task_9
// let h2 = document.createElement('h2');
// h2.className = "header";
// h2.innerHTML = "Слава Україні!";
// document.body.append(h2);

// let output = document.createElement('div');
// output.className = "output";
// document.body.append(output);

// const output1 = document.querySelector(".output");
// const header = document.querySelector("h2");

// output.addEventListener ("mouseover", chenge);

// function chenge () {
//     h2.innerHTML = "Героям Слава!";
//     output1.style.backgroundColor = "blue";
//     header.style.backgroundColor = "yellow";
//     header.style.color = "blue";
// };
// output.addEventListener ("mouseout", chengeout);

// function chengeout () {
//     h2.innerHTML = "Слава Україні!";
//     output1.style.backgroundColor = "yellow";
//     header.style.backgroundColor = "blue";
//     header.style.color = "yellow";
// };

// const clas ="super"
// const div = `
//     <div class="${clas}">
//         ${new Date().toISOString()}
//     </div>
//     `;
// output.insertAdjacentHTML("afterbegin", div);

// const header = "header";
// const output = "output";
// const div = `
//     <h2 class="${header}">Слава Україні!</h2>
//     <div class="${output}"></div>
//     `;
// let body = document.querySelector('body');
// body.insertAdjacentHTML("afterbegin", div);


// let h2 = document.querySelector ('.header');
// let outputChenge = document.querySelector ('.output');


// outputChenge.onmouseover = ()  => {
//     h2.innerHTML = "Героям Слава!";
//     h2.style.color = "yellow";
//     h2.style.backgroundColor = "blue";
//     outputChenge.style.backgroundColor = "yellow";
// };
// outputChenge.addEventListener('mouseout', out);
// function out () {
//     h2.innerHTML = "Слава Україні!";
//     h2.style.color = "blue";
//     h2.style.backgroundColor = "yellow";
//     outputChenge.style.backgroundColor = "blue";
// };

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

bigObj.onmouseenter = () => {
    console.log ("outer");
};
smallObj.onmouseenter = () => {
    console.log ("inner");
};