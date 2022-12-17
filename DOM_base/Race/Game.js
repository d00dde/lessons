import {observer} from "../../helpers/Observer.js";

export class Game {
  constructor() {
    addEventListener("keydown", (e)=> {
      if (e.code !== "Space") return;
      observer.emit("start");
    });
  }
}