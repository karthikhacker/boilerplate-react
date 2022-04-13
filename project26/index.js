const container = document.querySelector('.container');
const fileUpload = document.querySelector('#fileUpload');
fileUpload.addEventListener('change', (e) => {
    file = e.target.files[0];
    showFile();
})
let file;
container.addEventListener('dragover', (e) => {
    e.preventDefault();
    container.classList.add('active');
})
container.addEventListener('dragleave', (e) => {
    e.preventDefault();
    container.classList.remove('active');

})
container.addEventListener('drop', (e) => {
    e.preventDefault();
    container.classList.remove('active');
    file = e.dataTransfer.files[0];
    showFile();
})

function showFile() {
    let fileType = file.type;
    let validation = ["image/jpeg", "image/jpg", "image/png"];
    if (validation.includes(fileType)) {
        //console.log('This is an image');
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let fileUrl = fileReader.result;
            let imgTag = `<img src=${fileUrl}>`;
            container.innerHTML = imgTag;
        }
        fileReader.readAsDataURL(file);
    } else {
        console.log('This is not an image');
    }
}