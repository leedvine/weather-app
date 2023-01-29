// let latitude = "51.5072";
// let longitude = "0.1276";
let api = "2a06c39ab528ae5260e7be3fb9a676eb";
// let queryURL = "https://api.openweathermap.org/data/2.5/forecast?" + "lat=" + latitude + "&lon=" + longitude + "&appid=" + api;

// console.log(queryURL)

// $("#search-button").on("click", function(event) {
//     event.preventDefault()
//     // let person = $(this).attr("data-person");

//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     })
//       .then(function(response) {
//         var results = response.list;
//         console.log(results)
//         console.log(results[1].dt_txt)
//         console.log(results[9].dt_txt)

//       })

//     })

// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=2a06c39ab528ae5260e7be3fb9a676eb how to get latittudes

$("#search-button").on("click", function (event) {
  event.preventDefault();
  runWeatherSearch()
})

function runWeatherSearch () {
  let city = $("#search-input").val();
  console.log(city);
  
  let queryCity =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    city +
    "&limit=5" +
    "&appid=" +
    api;
  console.log(queryCity);

  $.ajax({
    url: queryCity,
    method: "GET",
  })
  .then(function (geoResponse) {
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
    })
    
    .then(function (response) {
      let results = response.list;
      console.log(results);
     
      let todaysDate = results[0].dt_txt;
      console.log(todaysDate);

      let todaysWeatherIcon = "https://openweathermap.org/img/wn/" + results[0].weather[0].icon + "@4x.png";
      console.log(todaysWeatherIcon) 

      console.log(results[8].dt_txt);
      let tempKelvin = results[0].main.temp;
      console.log(tempKelvin);
      let celcius = Math.round(tempKelvin - 273.15);
      console.log("temp converted to celcius = " + celcius)

      let wind = results[0].wind.speed;
      console.log("wind speed = " + wind + " miles per second");

      let humidity = results[0].main.humidity;
      console.log("Humidity is = " + humidity + "%");
      document.getElementById('todays-headline').innerHTML = city + ' ' + todaysDate + ' <img src="' + todaysWeatherIcon + '">';
      document.getElementById('todays-temp').innerHTML = "TEMP: " + celcius;
      document.getElementById('todays-wind').innerHTML = "WIND: " + wind + "m/s";
      document.getElementById('todays-humidity').innerHTML = "Humidity: " + humidity + "%";
    })
  })
}

// Create divs

document.getElementById('today').innerHTML += '<div id="todays-weather"></div>';
document.getElementById('todays-weather').innerHTML += '<h2 id="todays-headline"></h1><div id="todays-temp"></div><div id="todays-wind"></div><div id="todays-humidity"></div>';





