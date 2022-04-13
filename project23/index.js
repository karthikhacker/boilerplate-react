const currentValue = document.querySelector('#currentValue');
const result = document.querySelector('#result');
const clear = document.querySelector('#clear');
const erase = document.querySelector('#clear');
const buttons = document.querySelectorAll('.btn');
const evaluate = document.querySelector('#evaluate');
let calculateArr = [];

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (!btn.id.match('erase')) {
            calculateArr.push(btn.value);
            currentValue.innerHTML = calculateArr.join('');
            if (btn.classList.contains('btn-num')) {
                result.innerHTML = eval(calculateArr.join(''));
            }
        }
        if (btn.id.match('erase')) {
            calculateArr.pop();
            currentValue.innerHTML = calculateArr.join('');
            result.innerHTML = eval(calculateArr.join(''));
        }
        if (btn.id.match(evaluate)) {
            currentValue.style.display = 'none';
            result.style.fontSize = '2em';
        }
    })
})