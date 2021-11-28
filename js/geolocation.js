const API_KEY = "310ea266c5ce536164fdb78c045b6276";

function getWeather(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    console.log(lat, lon);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then(response => response.json()).then( data =>  {
        const weather = document.querySelector(".time-weather .weather");
        weather.innerText = `${data.name} / ${data.weather[0].main}`

        const weathers = document.querySelectorAll(".time-weather--upper .weather")
        weathers.forEach(item => item.innerText = `${data.weather[0].main}`);

    }
    )
}

function warning() {
    alert("Can't find your location. Please allow location features.");
}

navigator.geolocation.getCurrentPosition(getWeather, warning); 