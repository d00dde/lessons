
const chess = `
  <div class="root">
    <div class="board">
    </div>
  </div>
`;

document.body.insertAdjacentHTML("beforeend", chess);
const boardEl = document.querySelector(".board")
function board (x, y) {
  let result = "";
  for (let i = 0; i < x; i++) {
    let row = "<div class=\"row\">";
    for (let j = 0; j < y; j++) {
      console.log("i: ", i)
      console.log("j: ", j)
      console.log("---------------")
      row += `<div class="cell ${(i+j)%2 ? "black" : "white"}"></div>`
    }
    row += "</div>"
    result += row
  }
  return result;
}

boardEl.insertAdjacentHTML("beforeend", board(10, 10))