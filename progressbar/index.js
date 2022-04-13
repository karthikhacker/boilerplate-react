const progreebarFill = document.querySelector('.progress-fill');
const text = document.querySelector('#text');
const number = document.querySelector('#number');
const circle = document.querySelector('svg circle');

let count = 0;
let id = setInterval(timer, 30);
let counter = 0;

function timer() {
    if (count == 100) {
        clearInterval(id);
    } else {
        count++;
        text.innerText = count + '%';
        progreebarFill.style.width = '100%';
    }
}

let time = setInterval(pro, 30);

function pro() {
    if (counter == 100) {
        clearInterval(time);
    } else {
        counter++;
        number.innerText = counter + "%";
    }
}