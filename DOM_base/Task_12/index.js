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

bigObj.addEventListener('click', function() {
    console.log ('ouner', this);
});
smallObj.addEventListener('click', function(e) {
    console.log ('inner', this);
    e.stopPropagation();
});