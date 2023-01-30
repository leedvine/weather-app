// Create variable for api key
let api = "2a06c39ab528ae5260e7be3fb9a676eb";

// Create divs in the index.html file for todays weather

document.getElementById("today").innerHTML += '<div id="todays-weather"></div>';
document.getElementById("todays-weather").innerHTML +=
  '<h2 id="todays-headline"></h1><div id="todays-temp"></div><div id="todays-wind"></div><div id="todays-humidity"></div>';
document.getElementById("todays-headline").innerHTML =
  "No town or city selected. Please use search box!";

// Onclick even for button and preventing browser default behaviour
$("#search-button").on("click", function (event) {
  event.preventDefault();
  runWeatherSearch();
});

// Function to run the weather search

function runWeatherSearch() {
  let city = $("#search-input").val();
  console.log(city);

  let queryCity =
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
    city +
    "&limit=5" +
    "&appid=" +
    api;
  console.log(queryCity);

  $.ajax({
    url: queryCity,
    method: "GET",
  }).then(function (geoResponse) {
    let latitudeResult = geoResponse[0].lat;
    let longitudeResult = geoResponse[0].lon;
    console.log(latitudeResult);
    console.log(longitudeResult);

    let queryURL =
      "https://api.openweathermap.org/data/2.5/forecast?" +
      "lat=" +
      latitudeResult +
      "&lon=" +
      longitudeResult +
      "&appid=" +
      api;

      console.log(queryURL)

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      let results = response.list;
      console.log(results);

      let dateData = results[0].dt_txt;
      console.log(dateData);

      let weatherIcon =
        "https://openweathermap.org/img/wn/" +
        results[0].weather[0].icon +
        "@2x.png";
      console.log(weatherIcon);

      let tempKelvin = results[0].main.temp;
      console.log(tempKelvin);
      let celcius = Math.round(tempKelvin - 273.15);
      console.log("temp converted to celcius = " + celcius);

      let wind = results[0].wind.speed;
      let windRounded = Math.round(wind * 10) / 10;
      console.log("wind speed = " + windRounded + " miles per second");

      let humidity = results[0].main.humidity;
      console.log("Humidity is = " + humidity + "%");

      // Populate Divs with generated content for todays weather
      document.getElementById("todays-headline").innerHTML =
        city + " " + dateData + ' <img src="' + weatherIcon + '">';
      document.getElementById("todays-temp").innerHTML = "TEMP: " + celcius;
      document.getElementById("todays-wind").innerHTML =
        "WIND: " + windRounded + "m/s";
      document.getElementById("todays-humidity").innerHTML =
        "Humidity: " + humidity + "%";

      //generate columns for 5 day weather
      document.getElementById("forecast").innerHTML +=
        '<h4 id="forecast-title"></h3><div style="display: inline-block; width: 100%"><div id="day-1" class="col-day"></div><div id="day-2" class="col-day"></div><div id="day-3" class="col-day"></div><div id="day-4" class="col-day"></div><div id="day-5" class="col-day"></div>';

        document.getElementById("forecast-title").innerHTML = '5 Day Weather Forecast'

      //Create divs for day 1 of 5 day forecast

      document.getElementById("day-1").innerHTML +=
        '<h2 id="day-1-headline"></h1><div id="day-1-temp"></div><div id="day-1-wind"></div><div id="day-1-humidity"></div>';

      // Gather data for day 1 of 5

      dateData = results[8].dt_txt;
      console.log(dateData);

      weatherIcon =
        "https://openweathermap.org/img/wn/" +
        results[8].weather[0].icon +
        ".png";
      console.log(weatherIcon);

      tempKelvin = results[8].main.temp;
      console.log(tempKelvin);

      celcius = Math.round(tempKelvin - 273.15);
      console.log("temp converted to celcius = " + celcius);

      wind = results[8].wind.speed;
      windRounded = Math.round(wind * 10) / 10;
      console.log("wind speed = " + windRounded + " miles per second");

      humidity = results[8].main.humidity;
      console.log("Humidity is = " + humidity + "%");

      //Populate Divs with generated content for day 1 of 5 weather

      document.getElementById("day-1-headline").innerHTML =
        dateData + ' <img src="' + weatherIcon + '">';
      document.getElementById("day-1-temp").innerHTML = "TEMP: " + celcius;
      document.getElementById("day-1-wind").innerHTML =
        "WIND: " + windRounded + "m/s";
      document.getElementById("day-1-humidity").innerHTML =
        "Humidity: " + humidity + "%";

      //Create divs for day 2 of 5 day forecast

      document.getElementById("day-2").innerHTML +=
        '<h2 id="day-2-headline"></h1><div id="day-2-temp"></div><div id="day-2-wind"></div><div id="day-2-humidity"></div>';

      // Gather data for day 2 of 5

      dateData = results[16].dt_txt;
      console.log(dateData);

      weatherIcon =
        "https://openweathermap.org/img/wn/" +
        results[16].weather[0].icon +
        ".png";
      console.log(weatherIcon);

      tempKelvin = results[16].main.temp;
      console.log(tempKelvin);

      celcius = Math.round(tempKelvin - 273.15);
      console.log("temp converted to celcius = " + celcius);

      wind = results[16].wind.speed;
      windRounded = Math.round(wind * 10) / 10;
      console.log("wind speed = " + windRounded + " miles per second");

      humidity = results[16].main.humidity;
      console.log("Humidity is = " + humidity + "%");

      //Populate Divs with generated content for day 2 of 5 weather

      document.getElementById("day-2-headline").innerHTML =
        dateData + ' <img src="' + weatherIcon + '">';
      document.getElementById("day-2-temp").innerHTML = "TEMP: " + celcius;
      document.getElementById("day-2-wind").innerHTML =
        "WIND: " + windRounded + "m/s";
      document.getElementById("day-2-humidity").innerHTML =
        "Humidity: " + humidity + "%";

//Create divs for day 3 of 5 day forecast

document.getElementById("day-3").innerHTML +=
'<h2 id="day-3-headline"></h1><div id="day-3-temp"></div><div id="day-3-wind"></div><div id="day-3-humidity"></div>';

// Gather data for day 3 of 5

dateData = results[24].dt_txt;
console.log(dateData);

weatherIcon =
"https://openweathermap.org/img/wn/" +
results[24].weather[0].icon +
".png";
console.log(weatherIcon);

tempKelvin = results[24].main.temp;
console.log(tempKelvin);

celcius = Math.round(tempKelvin - 273.15);
console.log("temp converted to celcius = " + celcius);

wind = results[24].wind.speed;
windRounded = Math.round(wind * 10) / 10;
console.log("wind speed = " + windRounded + " miles per second");

humidity = results[24].main.humidity;
console.log("Humidity is = " + humidity + "%");

//Populate Divs with generated content for day 3 of 5 weather

document.getElementById("day-3-headline").innerHTML =
dateData + ' <img src="' + weatherIcon + '">';
document.getElementById("day-3-temp").innerHTML = "TEMP: " + celcius;
document.getElementById("day-3-wind").innerHTML =
"WIND: " + windRounded + "m/s";
document.getElementById("day-3-humidity").innerHTML =
"Humidity: " + humidity + "%";

//Create divs for day 4 of 5 day forecast

document.getElementById("day-4").innerHTML +=
'<h2 id="day-4-headline"></h1><div id="day-4-temp"></div><div id="day-4-wind"></div><div id="day-4-humidity"></div>';

// Gather data for day 4 of 5

dateData = results[32].dt_txt;
console.log(dateData);

weatherIcon =
"https://openweathermap.org/img/wn/" +
results[32].weather[0].icon +
".png";
console.log(weatherIcon);

tempKelvin = results[32].main.temp;
console.log(tempKelvin);

celcius = Math.round(tempKelvin - 273.15);
console.log("temp converted to celcius = " + celcius);

wind = results[32].wind.speed;
windRounded = Math.round(wind * 10) / 10;
console.log("wind speed = " + windRounded + " miles per second");

humidity = results[32].main.humidity;
console.log("Humidity is = " + humidity + "%");

//Populate Divs with generated content for day 4 of 5 weather

document.getElementById("day-4-headline").innerHTML =
dateData + ' <img src="' + weatherIcon + '">';
document.getElementById("day-4-temp").innerHTML = "TEMP: " + celcius;
document.getElementById("day-4-wind").innerHTML =
"WIND: " + windRounded + "m/s";
document.getElementById("day-4-humidity").innerHTML =
"Humidity: " + humidity + "%";


//Create divs for day 5 of 5 day forecast

document.getElementById("day-5").innerHTML +=
'<h2 id="day-5-headline"></h1><div id="day-5-temp"></div><div id="day-5-wind"></div><div id="day-5-humidity"></div>';

// Gather data for day 5 of 5

dateData = results[39].dt_txt;
console.log(dateData);

weatherIcon =
"https://openweathermap.org/img/wn/" +
results[39].weather[0].icon +
".png";
console.log(weatherIcon);

tempKelvin = results[39].main.temp;
console.log(tempKelvin);

celcius = Math.round(tempKelvin - 273.15);
console.log("temp converted to celcius = " + celcius);

wind = results[39].wind.speed;
windRounded = Math.round(wind * 10) / 10;
console.log("wind speed = " + windRounded + " miles per second");

humidity = results[39].main.humidity;
console.log("Humidity is = " + humidity + "%");

//Populate Divs with generated content for day 5 of 5 weather

document.getElementById("day-5-headline").innerHTML =
dateData + ' <img src="' + weatherIcon + '">';
document.getElementById("day-5-temp").innerHTML = "TEMP: " + celcius;
document.getElementById("day-5-wind").innerHTML =
"WIND: " + windRounded + "m/s";
document.getElementById("day-5-humidity").innerHTML =
"Humidity: " + humidity + "%";



    });
  });
}
