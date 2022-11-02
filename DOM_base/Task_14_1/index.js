
const chess = `
  <div class="root">
    <div class="board">
      <div class="row">
        <div class="cell white"></div>
        <div class="cell black"></div>
        <div class="cell white"></div>
        <div class="cell black"></div>
        <div class="cell white"></div>
        <div class="cell black"></div>
        <div class="cell white"></div>
        <div class="cell black"></div>
      </div>
      <div class="row">
        <div class="cell black"></div>
        <div class="cell white"></div>
        <div class="cell black"></div>
        <div class="cell white"></div>
        <div class="cell black"></div>
        <div class="cell white"></div>
        <div class="cell black"></div>
        <div class="cell white"></div>
      </div>
    </div>
  </div>
`;

document.body.insertAdjacentHTML("beforeend", chess);
