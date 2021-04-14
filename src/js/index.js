function search(city) {
  let apiKey = "ddf91e7f98ae542cfe124eef0bb0b9fb";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?q=";
  let celsiusUnit = "metric";
  let apiUrlCelsius = `${apiEndpoint}${city}&units=${celsiusUnit}&appid=${apiKey}`;
  axios.get(apiUrlCelsius).then(showTempCelsius);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  search(city);
}
function showTempCelsius(response) {
  document.querySelector("#main-city").innerHTML = response.data.name;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#temperature-main").innerHTML = Math.round(
    response.data.main.temp
  );
}
function getCurrentWeather(position) {
  let longitude = position.coords.longitude;
  let latitude = position.coords.latitude;
  let apiKey = "ddf91e7f98ae542cfe124eef0bb0b9fb";
  let unit = "metric";
  let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndPoint}lat=${latitude}&lon=${longitude}&units=${unit}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemp);
}
function showTemp(answer) {
  document.querySelector("#temperature-main").innerHTML = Math.round(
    answer.data.main.temp
  );
  document.querySelector("#main-city").innerHTML = answer.data.name;
  document.querySelector("#humidity").innerHTML = answer.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    answer.data.wind.speed
  );
}
function getLocation() {
  navigator.geolocation.getCurrentPosition(getCurrentWeather);
}

let currentLocationButton = document.querySelector("#currentlocation-button");
currentLocationButton.addEventListener("click", getLocation);

let newCity = document.querySelector("#search-button");
newCity.addEventListener("click", handleSubmit);

let Time = new Date();
let date = Time.getDate();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[Time.getMonth()];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[Time.getDay()];
let hours = Time.getHours();
let minutes = Time.getMinutes();
let seconds = Time.getSeconds();
document.querySelector("#date").innerHTML = `${day}, ${month} ${date}`;
document.querySelector("#time").innerHTML = `${hours}:${minutes}:${seconds}`;

search("Berlin");
