const currTemp = document.querySelector('#temp');
const desc = document.querySelector('.weather-type');
const loc = document.querySelector('.loc');
const humi = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const icon = document.querySelector('.weather img');
const weather = document.querySelector('.weather');
const loader = document.querySelector('.loader');

let loading = false;
const apiKey = 'cb511bda881e7143842467e3e17f9499';

//weather details 
const weatherDetails = (info) => {
    //console.log(info);
    if (info.cod == 404) {
        alert(info.message);
    } else {
        const city = info.name;
        const country = info.sys.country;
        const description = info.weather[0].description;
        const id = info.weather[0].id;
        const { temp, humidity } = info.main;
        const windSpeed = info.wind.speed;

        if (id == 803) {
            icon.src = 'icons/cloud.svg';
        } else if (id >= 200 && id <= 232) {
            icon.src = 'icons/storm.svg';
        } else if (id >= 300 && id <= 321) {
            icon.src = 'icons/rain.svg';
        } else if (id >= 500 && id <= 531) {
            icon.src = 'icons/rain.svg';
        } else if (id >= 600 && id <= 622) {
            icon.src = 'icons/snow.svg';
        } else if (id >= 700 && id <= 781) {
            icon.src = 'icons/haze.svg';
        } else if (id >= 800 && id <= 804) {
            icon.src = 'icons/clear.svg';
        }

        currTemp.innerHTML = Math.floor(temp) + '<span>&#x2103;</span>';
        desc.innerText = description;
        loc.innerHTML = '<i class="fas fa-map-marker-alt"></i>' + city + ',' + country;
        humi.innerText = `Humidity - ${humidity} %`;
        wind.innerText = `Wind speed - ${windSpeed}`;
    }
}


//getWeatherByCoords
const getWeatherByCoords = (lat, long) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(result => {
            loading = false;
            weatherDetails(result);
        })
}

//onSuccess 
const onSuccess = (position) => {
    //console.log(position);
    const { latitude, longitude } = position.coords;
    //console.log(latitude, longitude);
    getWeatherByCoords(latitude, longitude);
}

/// on Error 
const onError = (error) => {
    console.log(error);
}
//get weather 
const getWeather = () => {
    if (navigator.geolocation) {
        loading = true;
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
        console.log('Geolocation is not supported by your browser');
    }
}
loading ? weather.innerHTML = '<p>LOADING...</p>' : getWeather();
// api call 
const requestApi = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(res => res.json())
        .then(result => {
            //console.log(result);
            weatherDetails(result)
        });

}
//search city 
const searchCity = (e) => {
    if (e.key == 'Enter') {
        //console.log(search.value);
        requestApi(search.value);
    }
}
//Event listeners
const search = document.querySelector('#search');

search.addEventListener('keyup', searchCity);
window.addEventListener('load', getWeather)
