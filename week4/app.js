// Get your API key from OpenWeatherMap.
var apiKey = '024a3386cac108048d124879782a6dab';

// Create variables to store references to your input field, button, and weather info div.
var cityInput = document.getElementById('cityInput');
var btn = document.getElementById('btn');
var weatherInfo = document.getElementById('weather-info');

// Add an event listener to the button to detect when it is clicked.
btn.addEventListener('click', function () {
    // Inside the event listener, get the value of the input field (city name).
    var cityName = cityInput.value.trim();

    // Check if the city input is empty, alert the user to enter a city name.
    if (cityName === '') {
        alert('Please enter a city name.');
        return;
    }

    // Make an HTTP request to the OpenWeatherMap API to fetch the weather data for the entered city.
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            // Error handling for HTTP Status Code Error.
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Once the data is returned from the API, parse it and update the weather info div with the details.
            var weatherDescription = data.weather[0].description;
            var mainTemperatureKelvin = data.main.temp;
            var mainTemperatureCelsius = (mainTemperatureKelvin - 273.15).toFixed(2); // Convert from Kelvin to Celsius
            var windSpeed = data.wind.speed;

            // Update the weatherInfo div for each city.
            weatherInfo.innerHTML += `
        <div>
          <strong>The weather in ${cityName} is ${weatherDescription}.</strong><br>
          The temperature is ${mainTemperatureCelsius}°C with a wind speed of ${windSpeed} m/s.
        </div>
      `;
        })

    .catch(error => {
        // Error handling for API-Specific Error and Network Error.
        console.error('Error:', error.message);
        weatherInfo.innerHTML += `<div>Error fetching weather data for ${cityName}. Please try again.</div>`;
    });
});
