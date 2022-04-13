const gallery = document.querySelectorAll('.gallery img');
const previewBox = document.querySelector('.preview-box');
const close = document.querySelector('.close');
const previewImg = previewBox.querySelector('img');

gallery.forEach((img, index) => {
    let newIndex = index;
    img.addEventListener('click', () => {
        const preview = () => {
            let selectedImg = img.src;
            previewImg.src = selectedImg;
            console.log(previewImg.src);
        }
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');

        prev.addEventListener('click', () => {
            newIndex--;
            if (newIndex == 0) {
                preview();
                prev.style.display = 'none';
            } else {
                preview();
            }
        })
        next.addEventListener('click', () => {
            newIndex++;
        })
        preview();
        previewBox.classList.add('show');
        close.addEventListener('click', () => {
            previewBox.classList.remove('show');
        })
    })

})