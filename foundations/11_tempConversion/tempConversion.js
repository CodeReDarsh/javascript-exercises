function roundToOneDecimalPlace (num) {
  return Math.round(num * 10) / 10;
}

const convertToCelsius = function(fahrenheitTemp) {
  let celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
  celsiusTemp = roundToOneDecimalPlace(celsiusTemp);
  return celsiusTemp;
};

const convertToFahrenheit = function(celsiusTemp) {
  let fahrenheitTemp = celsiusTemp * 9 / 5 + 32;
  fahrenheitTemp = roundToOneDecimalPlace(fahrenheitTemp)
  return fahrenheitTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};