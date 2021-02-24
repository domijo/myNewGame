const cube = document.querySelector('#cube');
cube.addEventListener('click', function(){
    cube.classList.add ('hit');

    document.removeEventListener();
    cube.removeEventListener();

    //.write('mouse player wins')

});


const idTimer = setTimeout(function () {
   // alert('keyboard player wins')
    cube.classList.add ('safe');
    document.removeEventListener();
    cube.removeEventListener();
}, 5000);

