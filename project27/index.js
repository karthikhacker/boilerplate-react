let suggesstions = [
    'javascript beginner project',
    'font awesome icons',
    'font awesome icons free',
    'google fonts',
    'javascript fetch data loading indicator',
    'react show loading while fetching',
    'axios loading spinner react hooks',
    'node js',
    'node js tutorial',
    'express js tutorial'
]

const searchInput = document.querySelector('.search-input');
const inputText = document.querySelector('.inputText');
const autocompleteBox = document.querySelector('.autocomplete-box');

inputText.addEventListener('keyup', (e) => {
    //console.log(e.target.value);
    let userData = e.target.value;
    let filterArr = [];
    if (userData) {
        filterArr = suggesstions.filter(data => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        })
        //console.log(filterArr);
        filterArr = filterArr.map(data => {
            return data = `<li>${data}</li>`
        })
        console.log(filterArr);
        searchInput.classList.add('active');
        showSugg(filterArr);
    } else {
        searchInput.classList.remove('active');
    }
})
function showSugg(list) {
    let listData;
    let userValue;
    if (!list.length) {
        userValue = inputText.value;
        //console.log(userValue);
        listData = `<li>${userValue}</li>`;
    } else {
        listData = list.join('');
    }
    autocompleteBox.innerHTML = listData;
}