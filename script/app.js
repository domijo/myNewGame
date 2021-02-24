
let posTop = 10;
let postLeft = 10;
document.addEventListener ('keydown', function(event) {
    console.log(event);
    const key = event.code;
    if (key == "ArrowDown") {
        posTop = posTop + 10;
    }
    if (posTop > 90) {
        posTop = 0;
    }
    cube.style.top = posTop + '%';
    
})
