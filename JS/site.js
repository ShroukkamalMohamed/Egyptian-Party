// ~===================>>>>Elements==============================
let city = document.getElementById("city");
let day = document.getElementById("day");
let temp = document.getElementById("temp");
let icon = document.getElementById("icon");
let nextforecast = document.getElementById("nextforecast");
let saerchinput = document.getElementById("saerch");
let btnfind = document.getElementById("btnfind");
// ?=====================>>>>>Function===========================
async function fetchWeatherData(cityName) {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=a57df523a95c42babdd190424240401&q=${cityName}&days=4`);
    const data = await response.json();
    city.innerHTML = data.location.name;
    console.log(data);
   let nextforecastCard = "";
    for (let index = 0; index < data.forecast.forecastday.length; index++) {
        if (index == 0) {
            day.innerHTML = new Date(data.forecast.forecastday[index].date).toDateString();
            temp.innerHTML = data.forecast.forecastday[index].day.maxtemp_c + "°C";
            icon.src = data.forecast.forecastday[index].day.condition.icon;
        }
        else {
            nextforecastCard += ` 
            <div class="nextcard card  " id="nextcard">
            <div class="header text-center p-2">${new Date(data.forecast.forecastday[index].date).toDateString()}</div>
                <div class="body d-flex flex-column align-items-center">
                <div class="icon">
                    <img src="${data.forecast.forecastday[index].day.condition.icon}" id="nexticon" alt="" />
                </div>
                <span id="maxtemp">${data.forecast.forecastday[index].day.maxtemp_c} °C</span>
                <span id="minitemp">${data.forecast.forecastday[index].day.mintemp_c}°C</span>
                <span id="status">${data.forecast.forecastday[index].day.condition.text}</span>
                </div>
                </div>
                `;
        }
    }
    nextforecast.innerHTML = nextforecastCard;
}
fetchWeatherData("london");
// ^====================================>>>>>Events======================================
btnfind.addEventListener("click", function () {
    fetchWeatherData(saerchinput.value);
    console.log(saerchinput.value);
});
saerchinput.addEventListener("input", function () {
    fetchWeatherData(saerchinput.value);
})
