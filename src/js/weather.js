import imgWn from "../img/wn/*.png";

let token = "";

/* appel API OpenWeather */
let weather = function (city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&exclude=hourly,daily&appid=${token}&lang=fr&units=metric`;

  fetch(url)
    .then((response) =>
      response.json().then((data) => {
        //console.log(data);
        let currentDate = new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        document.querySelector(".weather_city p").innerHTML =
          day + "/" + month + "/" + year;

        document.querySelector(".weather_city h1").innerHTML = data.name;
        document.querySelector(".air p span").innerHTML =
          data.wind.speed + " m/s";
        document.querySelector(".weather h2").innerHTML =
          data.weather[0].description;
        document.querySelector(".weather h3").innerHTML = data.main.temp + "°";
        document.querySelector(".weather .info p span").innerHTML =
          data.main.humidity + "%";
        document.querySelector(".weather .temp p span").innerHTML =
          data.main.temp_min + "°";
        document.querySelector(".weather .temp p+p span").innerHTML =
          data.main.temp_max + "°";

        let indexImg = "a" + data.weather[0].icon;
        //console.log(imgicon);
        let imgicon = `<img src="${imgWn[indexImg]}">`;

        document.querySelector(".icon").innerHTML = imgicon;
      })
    )
    .catch((error) => console.error("error: " + error));
};

/* ville */
document.querySelector("#weather").addEventListener("submit", function (e) {
  e.preventDefault();
  let city = document.querySelector(".weather_recherche").value;

  weather(city);
});

weather("paris");
