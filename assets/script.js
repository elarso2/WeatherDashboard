var searchBtn = document.getElementById("searchBtn");

// function that takes and stores user input, and then converts the city into a latitude and longitude, to be entered into the weather API function.
function latLonApi(){

}


// function to use lat and long from above, and pull weather data using the One Call Weather API.
function weatherApi() {
    var weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=ce90f4792e1731721676f29be383bfdb';

    fetch(weatherUrl)
    .then(function (respone){
        return Response.json();
    })
    .then(function (data) {
        for 
    })
}

//using the search button to activate the latlonfxn
searchBtn.addEventListener('click', latLonApi);