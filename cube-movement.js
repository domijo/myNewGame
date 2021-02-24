
let posTop = 10;
let posLeft = 10;

document.addEventListener('keydown', function(moveCube){

console.log(moveCube);

const key = moveCube.code;

if (key == "ArrowDown") {
    posTop = posTop +10;
};
if (posTop > 90) {
    posTop = 0;
};
cube.style.top = posTop + '%';


if (key == "ArrowUp") {
    posTop = posTop -10;
};
if (posTop < 0) {
    posTop = 90;
};
cube.style.top = posTop + '%';


if (key == "ArrowLeft") {
    posLeft = posLeft -10;
};
if (posLeft < 0) {
    posLeft = 90;
};
cube.style.left = posLeft + '%';


if (key == "ArrowRight") {
    posLeft = posLeft +10;
};
if (posLeft > 90) {
    posLeft = 0;
};
cube.style.left = posLeft + '%';


})

