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

const term = {
    one : "секунда",
    two : "секунды",
    three : "секунд",
};

let namber = 12;

const showTerm = function (namber, term) {

    const stringNam = namber.toString();

    const lastElemStr = stringNam.slice(-1);

    const lastElemNum = +lastElemStr;

    if (lastElemNum === 1){
        return console.log (namber, term.one);
    }
    if (lastElemNum >1 && lastElemNum <5){
        return console.log (namber, term.two);
    }
    return console.log (namber, term.three);
    
};
showTerm(namber, term)


