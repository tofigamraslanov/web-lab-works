// let C, F, Km, M;

const temperatureElement = document.querySelector('.temperature');
const temperatureResult = document.querySelector('.temperature-result');

const roadElement = document.querySelector('.road');
const roadResult = document.querySelector('.road-result');

document.querySelector('.to-celsius').addEventListener('click', () => {
  let temperature = temperatureElement.value;
  const celsius = ((temperature - 32) * 5) / 9;
  temperatureResult.innerText = 'Celsius: ' + celsius;
});

document.querySelector('.to-fahrenheit').addEventListener('click', () => {
  let temperature = temperatureElement.value;
  const fahrenheit = (temperature * 9) / 5 + 32;
  temperatureResult.innerText = 'Fahrenheit: ' + fahrenheit;
});

document.querySelector('.to-km').addEventListener('click', () => {
  let road = roadElement.value;
  const km = road * 1609;
  roadResult.innerText = 'Kilometers: ' + km;
});

document.querySelector('.to-mil').addEventListener('click', () => {
  let road = roadElement.value;
  const mil = road / 1609;
  roadResult.innerText = 'Miles: ' + mil;
});
