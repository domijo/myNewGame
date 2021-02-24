//declare our variables used to manage our cube positions
let posTop = 10;
let posLeft = 10;
//add a keydown listener on the page that will load the function
document.addEventListener ('keydown', function(event) {
//log to the screen to tcheck the key and the value of keydown
    console.log(event);
//start declaring the condition that each position works
    const key = event.code;
    if (key == "ArrowDown") {
        posTop = posTop + 10;
    };
    if (posTop > 90) {
        posTop = 0;
    };
    //act with an event to manage, change the css propertie of our arrouws 
    cube.style.top = posTop + '%';


    if (key == "ArrowLeft") {
        posLeft = posLeft - 10;
    };
    if (posLeft < 0) {
        posLeft = 90 ;
    };
    cube.style.left = posLeft + '%';


    if (key == "ArrowRight") {
        posLeft = posLeft + 10;
    };
    if (posLeft > 90) {
        posLeft = 0;
    };
    cube.style.left = posLeft + '%';


    
    if (key == "ArrowUp") {
        posTop = posTop - 10;
    };
    if (posTop <0) {
        posTop = 90;
    };
    cube.style.top = posTop + '%';
})
