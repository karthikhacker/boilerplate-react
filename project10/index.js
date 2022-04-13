const toggleBtn = document.querySelector('#toggle-btn');
const nav = document.querySelector('.nav');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    nav.classList.toggle('active');
})