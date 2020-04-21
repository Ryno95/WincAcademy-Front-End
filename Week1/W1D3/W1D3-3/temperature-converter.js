let celciusToFahrenheit = function(celsius) {
    console.log(celsius + '°C is ' + ((celsius * 1.8) + 32) + '°F')
};

celciusToFahrenheit(29)

let fahrenheitToCelsius = function(fahrenheit) {
    console.log(fahrenheit + '°F is ' + (fahrenheit - 32) * (5 / 9));
};

fahrenheitToCelsius(84.2)