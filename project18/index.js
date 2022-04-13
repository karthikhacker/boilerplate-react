const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const fliper = document.getElementById('fliper');
const color = document.querySelector('.color');

fliper.addEventListener('click', (e) => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[random()];
        //console.log(hexColor);
        color.innerText = hexColor;
        document.body.style.backgroundColor = hexColor;
    }
})

function random() {
    return Math.floor(Math.random() * hex.length);
}