const counter = document.querySelector('#counter');
const decrease = document.querySelector('#decrease');
const increase = document.querySelector('#increase');
const reset = document.querySelector('#reset');
let count = 0;

increase.addEventListener('click', (e) => {
    count++;
    counter.innerText = count;
    counter.style.color = '#2ecc71';
})
decrease.addEventListener('click', (e) => {
    count--;
    counter.innerText = count;
    counter.style.color = '#c0392b';
})
reset.addEventListener('click', (e) => {
    count = 0;
    counter.innerText = count;
    counter.style.color = '#000';
})
