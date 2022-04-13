const open = document.querySelector('#open');
const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('.close-btn');

open.addEventListener('click', () => {
    modal.classList.add('active');
})

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
})
