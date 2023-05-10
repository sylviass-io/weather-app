function changeCity(event) {
  event.preventDefault();

  let cityName = document.querySelector("#search-text-input").value;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${cityName}`;

  let APIkey = "180114c4d783b1e1b6d3340b5a739957";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric`;

  axios.get(url).then(showTemp);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", changeCity);

function showTemp(response) {
  let h2 = document.querySelector("h2");
  let temp = Math.round(response.data.main.temp);
  let cityName = response.data.name;
  h2.innerHTML = `${temp}°`;
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = `${cityName}`;

  updateWeather(response);
}

function localDate() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  return day;
}

let h3 = document.querySelector("h3");
h3.innerHTML = `${localDate()}`;

function updateWeather(response) {
  let wind = response.data.wind.speed;
  let humidity = response.data.main.humidity;
  let span2 = document.querySelector("span2");
  span2.innerHTML = `${wind}`;
  let span3 = document.querySelector("span3");
  span3.innerHTML = `${humidity}`;
}
