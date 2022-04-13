const current = document.querySelector('#current-img');
const images = document.querySelectorAll('.images img');
let opacity = 0.4;

images.forEach(img => {
    img.addEventListener('click', (e) => {
        images.forEach(img => img.style.opacity = 1);
        current.src = e.target.src;
        e.target.style.opacity = opacity;
    })
})