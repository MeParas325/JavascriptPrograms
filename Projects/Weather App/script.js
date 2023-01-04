const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a6ee8dc88dmshd85f04f4eb147c6p13cc3djsna8bfe335c97e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) =>{
	cityName.innerHTML = city

	fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
	.then(response => response.json())
	.then(response =>{
		console.log(response)
		
		 cloud_pct.innerHTML = response.cloud_pct
		 temp.innerHTML = response.temp
		 celcius.innerHTML = response.temp
		 feels_like.innerHTML = response.feels_like
		 humidity.innerHTML = response.humidity
		 humidity2.innerHTML = response.humidity
		 min_temp.innerHTML = response.min_temp
		 max_temp.innerHTML = response.max_temp
		 wind_speed.innerHTML = response.wind_speed
		 windSpeed.innerHTML = response.wind_speed
		 //  wind_degrees.innerHTML = response.wind_degrees
		 sunrise.innerHTML = response.sunrise
		 sunset.innerHTML = response.sunset
		 })
		 .catch(err => console.error(err));
}

submit.addEventListener('click', (e)=>{
	e.preventDefault()
	console.log("Clicked on button")
	console.log(e)
	getWeather(city.value)
}) 
