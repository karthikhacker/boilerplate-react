let flag = 0;
let nextBtn = document.querySelector('.right-btn');
let prevBtn = document.querySelector('.left-btn');

function controller(x) {
    flag = flag + x;
    //console.log(x);
    slideShow(flag);
}
nextBtn.addEventListener('click', () => {
    controller(1);
})
prevBtn.addEventListener('click', () => {
    controller(-1);
})
function slideShow(num) {
    let slides = document.querySelectorAll('.slides');
    // let rightBtn = document.querySelector('.right-btn');
    // let leftBtn = document.querySelector('.left-btn');
    if (num == slides.length) {
        flag = 0;
        num = 0;
    }
    if (num < 0) {
        flag = slides.length - 1;
        num = slides.length - 1;
    }
    for (let x of slides) {
        x.style.display = 'none';
        //console.log(x);
    }
    //console.log(slides);
    slides[num].style.display = 'block';

}
slideShow(flag);
