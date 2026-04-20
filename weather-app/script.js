const inputCity = document.getElementById("inputCity");
const buttonSearch = document.getElementById("buttonSearch");
let output = document.getElementById("output");
inputCity.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    findWeather();
  }
});
buttonSearch.addEventListener("click", function () {
  findWeather();
});

async function findWeather() {
  let inputCityValue = inputCity.value.trim();
  if (inputCityValue) {
    output.innerHTML = "";
    let cityName = inputCityValue;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},NO&appid=6e3f55a647667b5b7e0403f4e810045f&units=metric&lang=no`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      inputCity.value = "";
      let p = document.createElement("p");
      p.innerText = data.name;
      p.classList.add("city");
      output.appendChild(p);
      p = document.createElement("p");
      p.innerText = `${Math.round(data.main.temp)}°`;
      p.classList.add("temp");
      output.appendChild(p);
      p = document.createElement("p");
      p.innerHTML = `${data.weather[0].description}<br>H:${Math.round(data.main.temp_max)}° L:${Math.round(data.main.temp_min)}°`;
      p.classList.add("weather");
      output.appendChild(p);
    } catch (error) {
      if (error) {
        output.innerHTML = `Vi fant ingen steder som heter «${cityName}».`;
      }
    }
  }
}
