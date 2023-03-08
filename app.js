var modalButton = document.querySelectorAll('.modalButton');
var overlay = document.querySelector('.overlay');
var modal = document.querySelector('.modal');
var closeBtn = document.querySelector('.close');
const body = document.querySelector('body');

for (i = 0; i < modalButton.length; i++) {

    modalButton[i].addEventListener('click', removeHidden);
}

overlay.addEventListener('click', addHidden)
closeBtn.addEventListener('click', addHidden)
body.addEventListener('keydown', ecapeKey);

function addHidden() {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
    // overlay.classList.remove('transitionIn');
    // modal.classList.remove('transitionIn');
}
function removeHidden() {
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
    // overlay.classList.add('transitionIn');
    // modal.classList.add('transitionIn');
    // console.log(overlay.classList)
}
function ecapeKey(a) {
    if (a.key === "Escape") {
        overlay.classList.add('hidden');
        modal.classList.add('hidden');
    }
}
// function transition(){
//     document.getElementsByClassName('transitionIn').style.transition = 'all 2s'
// }



    // body.addEventListener('keydown', (e) => {
    //     console.log(e.key, "==>>yeh wala key dabai hai")
    //     if (e.key === 'Escape') {
    //         overlay.classList.add('hidden')
    //         modal.classList.add('hidden')
    //     }
    // })