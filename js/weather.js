const WEATHER_API_KEY = "67efbee9ae301e123f979db93f05a04b";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      city.innerText = data.name;
      const temp = Math.floor(data.main.temp);
      weather.innerText = `${data.weather[0].main} \ ${temp}℃`;
    });
}

function onGeoError() {
  alert("해당 지역의 날씨를 불러올 수 없습니다..:(");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
