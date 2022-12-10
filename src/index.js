import './style.css';

// retrieve DOM element to the index.js
// weather_condition
const weather_condition = document.querySelector('.weather_condition');
// weather_location
const weather_location = document.querySelector('.weather_location');
// actual temperature
const actual_temp = document.querySelector('.temp-c');
// wind speed
const windSpeed = document.querySelector('.wind');
// humidity
const humidity = document.querySelector('.humidity');
// feels like temperature
const feelsLikeTemp = document.querySelector('.feelsLike');

(() => {
	// retrieve DOM element to the index.js
	// form input-box
	const inputValue = document.querySelector('#input');
	// form submit button
	const form = document.querySelector('form').addEventListener('submit', userInput);
	const submitBtn = document.querySelector('button').addEventListener('submit', userInput);
	function start(inputValue, e) {
		if (inputValue.value === '') {
			inputValue = 'addis ababa';
			getWeatherData(inputValue);
		} else if (e.target.type == 'submit') {

			// console.log(e.target.value)
		}
	}

	// takes user input and display it
	function userInput(e) {
		e.preventDefault();
		getWeatherData(e.target.input.value)
		// console.log(e)
		// console.log(e.target.input.value)
	}

	async function getWeatherData(userInputValue) {
		const weatherDataResponse = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=530c0aa9cf894e0eb6593506221012&q=${userInputValue}`,
			{
				mode: 'cors',
			})
		if (weatherDataResponse.status == 400) {
			throwErrorMessage();
		} else {
			const weatherData = await weatherDataResponse.json();
			// retrieve DOM element to the index.js
			// weather_condition DOM
			const weather_condition = document.querySelector('.weather_condition');
			// weather_location
			const weather_location = document.querySelector('.weather_location');
			// actual temperature
			const actual_temp = document.querySelector('.temp-c');
			// wind speed
			const windSpeed = document.querySelector('.wind');
			// humidity
			const humidity = document.querySelector('.humidity');
			// feels like temperature
			const feelsLikeTemp = document.querySelector('.feelsLike');
			// passes the fetched json object to make the DOM
			makeDom(weatherData);
			// console.log(weatherData.location.country)// country
			// console.log(weatherData.location.name)// city name
			// console.log(weatherData.current.condition.text)// condition
			// console.log(weatherData.current.temp_c)// actual temperature in degree centigrade
			// console.log(weatherData.current.feelslike_c) // feels like in degree centigrade
			// console.log(weatherData.current.humidity) // humidity
			// console.log(weatherData.current.wind_kph) // wind speed
		}
		// take fetched api-request and display
		function makeDom(fetchResult) {
			let degreeSign = '&#8451;'
			weather_location.innerText = `${fetchResult.location.name}, ${fetchResult.location.country}`;
			weather_condition.innerText = `${fetchResult.current.condition.text}`;

			// retrieve the body and make the background to its file
			const body = document.querySelector('body');
			// if(fetchResult.current.condition.text === 'Sunny'){
			// 	body.style.backgroundImage = '/src'
			// }
			actual_temp.innerText = `${fetchResult.current.temp_c}\u00B0C`;
			humidity.innerText = `HUMIDITY:  ${fetchResult.current.humidity}`;
			windSpeed.innerText = `WIND:  ${fetchResult.current.wind_kph} Kph`;
			feelsLikeTemp.innerText = `FEELS LIKE:  ${fetchResult.current.feelslike_c} \u00B0C`;
		}
		function throwErrorMessage() {
			weather_location.innerText = 'no match found';
			weather_location.style.color = 'red'
			weather_condition.innerText = '-';
			weather_condition.style.color = 'red'
			actual_temp.innerText = '-';
			actual_temp.style.color = 'red';
			humidity.innerText = `HUMIDITY: -`;
			humidity.style.color = 'red';
			windSpeed.innerText = `WIND: -`;
			windSpeed.style.color = 'red';
			feelsLikeTemp.innerText = `FEELS LIKE: -`;
			feelsLikeTemp.style.color = 'red';

		}
	}


	start(inputValue)
})()
