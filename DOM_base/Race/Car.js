import {observer} from "../../helpers/Observer.js";

export class Car {
  constructor(name) {
    this.x = 0;
    this.name = name;
    this.draw(name)
    observer.subscribe("start", this.move.bind(this))
  }

  draw(name) {
    const carHtml = `
      <div class="line">
        <div class="car" id="${name}">
          <img  
            src="https://media.istockphoto.com/id/1157655660/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B0%D0%B3%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9-%D1%87%D0%B5%D1%80%D0%B2%D0%BE%D0%BD%D0%B8%D0%B9-%D0%BF%D0%BE%D0%B7%D0%B0%D1%88%D0%BB%D1%8F%D1%85%D0%BE%D0%B2%D0%B8%D0%BA-%D0%BD%D0%B0-%D0%B1%D1%96%D0%BB%D0%BE%D0%BC%D1%83-%D1%82%D0%BB%D1%96-%D0%B2%D0%B8%D0%B4-%D0%B7%D0%B1%D0%BE%D0%BA%D1%83.jpg?s=612x612&w=is&k=20&c=5OSfx1vuawXQ6ZPCLsVQC0wCXe16v3iEajO-wYw-G30="
          >
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", carHtml)
    this.carElement = document.querySelector(`#${name}`)
  }

  move() {
    let intervalID = setInterval(()=>{
      this.carElement.style.left =`${this.x += Math.floor(Math.random() * 50)}px`;
      if (this.x >= 100) {
        clearInterval(intervalID)
        observer.emit("finish", this.name)
      }
    }, 1000);
  }
}
