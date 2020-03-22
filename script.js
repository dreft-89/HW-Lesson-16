let divElement = document.querySelector('.container');

divElement.addEventListener('click', function(event) {
    let spanMessage = document.getElementById('span');
    let button = event.target.closest('button');
    if (button == null) return;
    spanMessage.innerText = "You clicked " + button.innerText + " button";
})