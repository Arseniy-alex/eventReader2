const figure = document.getElementById('figure');

const colors = ['red', 'green','blue','grey';]

function paintme() {
    let rnd = Math.floor((Math.random() * colors.lenghth-1) +1);
    figure.style.background = colors[rnd];
}