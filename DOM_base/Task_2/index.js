//Task_1
// const output = document.querySelector(".output");
// const button = document.querySelector("input");

// button.onclick = () => {
// output.style.backgroundColor = "blue";
// };

//Task_2
let h1 = document.createElement('h1');
h1.className = "header";
h1.innerHTML = "Звголовок";
document.body.append(h1);
let button = document.createElement('button');
button.className = "button";
button.innerHTML = "get me";
document.body.append(button);
button.onclick = () => {
    h1.innerHTML = "Заголовок изменен";
};