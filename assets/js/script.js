// Create variable for api key
let api = "2a06c39ab528ae5260e7be3fb9a676eb";

// Variable to change index position for data gathering in function below
let index = 0;

// Onclick even for button and preventing browser default behaviour
$("#search-button").on("click", function (event) {
  event.preventDefault();
  runWeatherSearch();
});

// Create divs in the index.html file

document.getElementById("today").innerHTML += '<div id="todays-weather"></div>';
document.getElementById("todays-weather").innerHTML +=
  '<h2 id="todays-headline"></h1><div id="todays-temp"></div><div id="todays-wind"></div><div id="todays-humidity"></div>';
document.getElementById("todays-headline").innerHTML = 'No town or city selected. Please use search box!';

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

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      let results = response.list;
      console.log(results);

      let todaysDate = results[0].dt_txt;
      console.log(todaysDate);

      let weatherIcon =
        "https://openweathermap.org/img/wn/" +
        results[index].weather[0].icon +
        "@2x.png";
      console.log(weatherIcon);

      let tempKelvin = results[index].main.temp;
      console.log(tempKelvin);
      let celcius = Math.round(tempKelvin - 273.15);
      console.log("temp converted to celcius = " + celcius);

      let wind = results[index].wind.speed;
      let windRounded = Math.round(wind * 10) / 10;
      console.log("wind speed = " + windRounded + " miles per second");

      let humidity = results[0].main.humidity;
      console.log("Humidity is = " + humidity + "%");

      // Populate Divs with generated content for todays weather
      document.getElementById("todays-headline").innerHTML =
        city + " " + todaysDate + ' <img src="' + weatherIcon + '">';
      document.getElementById("todays-temp").innerHTML = "TEMP: " + celcius;
      document.getElementById("todays-wind").innerHTML =
        "WIND: " + windRounded + "m/s";
      document.getElementById("todays-humidity").innerHTML =
        "Humidity: " + humidity + "%";

//generate columns for 5 day weather
        document.getElementById("forecast").innerHTML +=
        '<h3 id="forcast-title"></h3><div style="display: inline-block; width: 100%"><div id="day-1" class="col-day"></div><div id="day-2" class="col-day"></div><div id="day-3" class="col-day"></div><div id="day-4" class="col-day"></div><div id="day-5" class="col-day"></div>';

 // Populate column with day one weather



    });
  });
}

