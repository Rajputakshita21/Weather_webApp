const inputBox  = document.querySelector('.input-box');
//const searchBtn = document.querySelector('#btn');
const button = document.querySelector('.btn-div');
const weather_img = document.querySelector('.weather-img'); 
const temperature = document.querySelector('.temperature'); 
const description = document.querySelector('.description'); 
const humidity = document.querySelector('#humidity');  
const wind_speed = document.querySelector('#wind-speed');  
const btn     = document.getElementById("#btn");  
const location_notfound  = document.querySelector('.location-not-found'); 
const weather_body = document.querySelector('.weather-body')





async function checkWeather(city){
    const api_key = Rajputakshita; 

    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`; 

    const weather_data = await fetch(`${url}`).then(response => response.json()); 

    console.log(weather_data);

    if(weather_data.cod === '404'){
      location_notfound.style.display = "flex"; 
      weather_body.style.display   = "none";  
      return; 
  }

    location_notfound.style.display = "none"; 
    weather_body.style.display   = "flex"; 
    temperature.innerHTML =  `${Math.round(weather_data.main.temp)}°C`; 
    description.innerHTML =  `${weather_data.weather[0].description}`; 
    humidity.innerHTML    =  `${weather_data.main.humidity}%`; 
    wind_speed.innerHTML  =  `${weather_data.wind.speed}Km/h`;
    


    switch(weather_data.weather[0].main){
        // case 'Clouds':
        //     weather_img.src = "/images/clouds.png"; 
        //     break; 
        case 'Clear':
            weather_img.src = "/images/clear.png"; 
            break; 
        case 'Rain':
            weather_img.src = "/images/rain.png"; 
            break; 
        case 'Mist':
            weather_img.src = "/images/mist.png"; 
            break; 
        case 'Snow':
            weather_img.src = "/images/snow.png"; 
            break; 
        case 'Clouds':
            weather_img.src = "/images/cloud.png"; 
            break; 
    }

}




 

button.addEventListener('click', () => {
    checkWeather(inputBox.value); 
})