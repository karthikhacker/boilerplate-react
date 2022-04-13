//search bar expand
function searchBar() {
    const toggleSearch = document.querySelector('.toggle-search');
    const inputGroup = document.querySelector('.input-group');
    const nav = document.querySelector('.nav');
    const searchInput = document.querySelector('#search-input');

    toggleSearch.addEventListener('click', () => {
        if (inputGroup.classList.toggle('active')) {
            searchInput.focus();
            nav.style.display = "none";
        } else {
            nav.style.display = 'flex';
        }
    })
}
searchBar();

//mobile nav
function mobileNav() {
    const toggle = document.querySelector('#toggle');
    const nav = document.querySelector('.nav');
    const hamburger = document.querySelector('.hamburger');

    toggle.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    })
}
mobileNav();

//service toggle 
function serviceToggle() {
    const cols = document.querySelectorAll('.col');
    cols.forEach(el => {
        el.addEventListener('click', () => {
            el.classList.toggle('active');
        })
    })

}
serviceToggle();