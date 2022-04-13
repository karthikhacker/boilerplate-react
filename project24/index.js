const checkbox = document.querySelector('#checkbox');
const container = document.querySelector('.container');
const btnCog = document.querySelector('.btn-cog');
const colorSwitcher = document.querySelector('.color-switcher');
const themeBtn = document.querySelectorAll('.theme-btn');

themeBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        let dataColor = btn.getAttribute('data-color');
        document.body.style.background = dataColor;
    })
})

btnCog.addEventListener('click', (e) => {
    colorSwitcher.classList.toggle('active');
})

checkbox.addEventListener('change', (e) => {
    console.log(e.target);
    document.body.classList.toggle('dark');
    container.classList.toggle('dark');
})