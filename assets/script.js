var searchBtn = document.getElementById("searchBtn");
var cityInputEl = document.getElementById("citySearch").value;
var cityNameDisplay = document.getElementById("cityName");

function cityName() {
  console.log(cityInputEl);
}

// function that takes and stores user input, and then converts the city into a latitude and longitude, to be entered into the weather API function.
function latLonApi() {
  var latUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit=1&appid=ce90f4792e1731721676f29be383bfdb";

  fetch(latUrl)
    .then(function (response) {
      return Response.json();
    })
    .then(function (data) {
      getWeather(data[0].lat, data[0].lon);
    });
}

// function to use lat and long from above, and pull weather data using the One Call Weather API.
function weatherApi() {
  var weatherUrl =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&exclude=daily&appid=ce90f4792e1731721676f29be383bfdb";

  fetch(weatherUrl)
    .then(function (response) {
      return Response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        //for the current day's temp
        console.log(data[i].current.weather.icon);
        console.log(data[i].current.temp);
        console.log(data[i].current.wind_speed);
        console.log(data[i].humidity);
        console.log(data[i].uvi);
        //for future forecast dates
        console.log(data[i].daily.weather.icon);
        console.log(data[i].daily.temp.day);
        console.log(data[i].daily.humidity);
        // console.log(data[i].daily.uvi);
        console.log(data[i].daily.wind_speed);
      }
    });
}

//using the search button to activate the latlonfxn
searchBtn.addEventListener("click", cityName);
