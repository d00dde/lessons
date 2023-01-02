
let getRandomNumber = function (size) {
    return Math.floor(Math.random() * size)
};
let getDistance = function (event, target){
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};
let getDistanceHint = function (distance) {
    if (distance < 10) {
    return "Boiling hot!";
    } else if (distance < 20) {
    return "Realli hot!";
    } else if (distance < 40) {
    return  "Hot!";
    } else if (distance < 80) {
    return "Warm!";
    } else if (distance < 160) {
    return "Cold";
    } else if (distance < 320) {
    return "Really cold!";
    } else {
    return "Freezing!";
    }
};
let width = 600;
let height = 600;
let clicks = 0;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};
let clickMap = document.getElementById("map")
    clickMap.onclick = (function (event) {
    clicks++;
    let distance = getDistance(event, target);
    let distanceHint = getDistanceHint(distance);
    let distanceText = document.getElementById("distance")
    distanceText.innerHTML = distanceHint;
    if (distance < 8){
    alert("Found the treasure in " + clicks + "clicks");
    }
});