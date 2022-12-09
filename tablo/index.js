const field = document.querySelector(".field");

const cells = new Array(900).fill(null).map((_) => `<div class='cell'><div class='lamp'></div></div>`).join("");

field.insertAdjacentHTML("beforeend", cells);

field.onclick = (e) => {
  if(e.target.classList.contains("lamp")) {
    e.target.classList.toggle("light")
  } else {
    e.target.children[0].classList.toggle("light");
  }
}
