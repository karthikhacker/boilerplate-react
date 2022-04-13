function getLocation() {
    let btn = document.querySelector('.btn');
    let myLocation = document.querySelector('#myLocation');

    btn.addEventListener('click', () => {
        //console.log(window);
        myLocation.innerHTML = '<p> <img class="loader"  src="./iphone-spinner-2.gif"> </p>';
        navigator.geolocation.getCurrentPosition(success, error);
    })
}
function success(position) {
    //console.log(position);
    let { latitude, longitude } = position.coords;
    let geoApi = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
    fetch(geoApi).then(res => res.json())
        .then(response => {
            console.log(response);
            myLocation.innerText = response.locality + ', ' + response.countryName
        })
        .catch(error => console.log(error))


}
function error(error) {
    console.log(error.message);
    let myLocation = document.querySelector('#myLocation');
    myLocation.innerHTML = `<p class="error">${error.message}</p>`;
}
getLocation();

