import './style.css';

// retrieve DOM element to the index.js

let location = 'addis ababa'


async function getWeatherData(location){
	const weatherDataResponse = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=530c0aa9cf894e0eb6593506221012&q=${location}`,
    {
      mode: 'cors',
    })
	const weatherData = await weatherDataResponse.json();
	console.log(weatherData.location.country)// country
	console.log(weatherData.location.name)// city name
	console.log(weatherData.current.condition.text)// condition
	console.log(weatherData.current.temp_c)// actual temperature in degree centigrade
	console.log(weatherData.current.feelslike_c) // feels like in degree centigrade
	console.log(weatherData.current.humidity) // humidity
	console.log(weatherData.current.wind_kph) // wind speed
	


	console.log(weatherData)
}
// const getData = getWeatherData(location).then(curr => console.log(curr.current.condition.text));
const AddisAbaba = getWeatherData(location)