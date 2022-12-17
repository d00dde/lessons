import {observer} from "../../helpers/Observer.js";

export class Board {
  constructor() {
    this.draw()
    this.leaders = []
    observer.subscribe("start", this.start.bind(this))
    observer.subscribe("finish", this.finish.bind(this))
  }

  draw() {
    document.body.insertAdjacentHTML("beforeend", `
      <div class="board"> Ready for race</div>
    `)
    this.boardElement = document.querySelector(".board")
  }

  start() {
    this.boardElement.innerText = "Race is go!!!"
  }

  finish(carName) {
    this.leaders.push(carName)
    this.boardElement.innerHTML = `
      <div>
        Finished:
        <ol>
          ${this.leaders.map((item) => `<li>${item}</li>` ).join("")}
        </ol>
      </div>`
  }

}