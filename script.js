let divElement = document.querySelector('.container');

divElement.addEventListener('click', function(event) {
    let spanMessage = document.getElementById('span');
    let button = event.target.closest('button');
    if (button == null) return;
    if (event.target.closest('button.container__first')) {
        spanMessage.innerText = "You clicked First button";
    }
    if (event.target.closest('button.container__second')) {
        spanMessage.innerText = "You clicked Second button";
    }
    if (event.target.closest('button.container__third')) {
        spanMessage.innerText = "You clicked Third button";
    }
})