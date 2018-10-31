 const weatherData = {
		tempUnit: 'C',
		windSpeedUnit: 'm/s',
		days: [
		{ day: 'Mon', temp: 22, windDirection: 'north-east', windSpeed: 10 , type:'sunny' },
		{ day: 'Tue', temp: 14, windDirection: 'north-west', windSpeed: 14, type: 'rainy' },
		{ day: 'Wed', temp: 17, windDirection: 'south-east', windSpeed: 20, type: 'cloudy' },
		{ day: 'Thu', temp: 19, windDirection: 'south-west', windSpeed: 15, type: 'rainy' },
		{ day: 'Fri', temp: 23, windDirection: 'north-east', windSpeed: 5 , type:'sunny' },
		{ day: 'Sat', temp: 25, windDirection: 'north-west', windSpeed: 8 , type:'sunny' },
		{ day: 'Sun', temp: 24, windDirection: 'south-west', windSpeed: 10 , type:'cloudy' }
		]
	};
	
function selectDay(dan){	
	document.getElementById("temperature").innerHTML = weatherData.days[dan].temp;
	document.getElementById("wind-direction").innerHTML = weatherData.days[dan].windDirection;
	document.getElementById("wind-speed").innerHTML = weatherData.days[dan].windSpeed;
	document.getElementById("type").innerHTML = weatherData.days[dan].type;
    
    direction = weatherData.days[dan].windDirection;
    directionImage = document.getElementById("direction-image");
    
    switch (direction){
        case "north-east":
        directionImage.src = "https://png.pngtree.com/svg/20161223/_arrow_up_right_27890.png";
        break;
        case "north-west":
        directionImage.src = "https://png.pngtree.com/svg/20161223/_arrow_up_left_27887.png";
        break;
        case "south-east":
        directionImage.src = "http://cdn.onlinewebfonts.com/svg/img_2146.png";
        break;
        case "south-west":
        directionImage.src = "http://cdn.onlinewebfonts.com/svg/img_2148.png";
        break;
    }
    
    type = weatherData.days[dan].type;
    typeImage = document.getElementById("type-image");
    
    switch (type){
        case "sunny":
        typeImage.src = "https://www.weather2umbrella.com/wp-content/themes/w2u/image/svg/weather-icons/d01.svg";
        break;
        case "rainy":
        typeImage.src = "https://www.weather2umbrella.com/wp-content/themes/w2u/image/svg/weather-icons/n09.svg";
        break;
        case "cloudy":
        typeImage.src = "https://www.weather2umbrella.com/wp-content/themes/w2u/image/svg/weather-icons/d08.svg";
        break;
    }
}