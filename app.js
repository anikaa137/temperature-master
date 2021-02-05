// 444055744ff1b7c368be2850b94d17c0
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi = {
    key:"444055744ff1b7c368be2850b94d17c0" ,
    baseUrl:"https://api.openweathermap.org/data/2.5/weather?"
}

 

const button = document.getElementById("button").addEventListener('click',function(){
    const weatherInput= document.getElementById("input-box").value; 
 if(weatherInput === ''){
    alert('You must need a valid City name.')
 }
 else{
    const weatherInput= document.getElementById("input-box").value; 
    // console.log(weatherInput)
    getWeatherReport (weatherInput)
 }
})

function getWeatherReport (city){
    fetch(`${weatherApi.baseUrl}q=${city}&appid=${weatherApi.key}`)
    .then(rep => rep.json())
    .then (showWeatherReport)
}
 function showWeatherReport (weather){
    //  console.log (weather)
    let city = document.getElementById("city");
        city.innerText = `${weather.name} ${weather.sys.country}`
        let temperature = document.getElementById('temp');
        temperature.innerText  =  `${Math.round(weather.main.temp-273.15)}&deg;C `
        let weatherType = document.getElementById('weatherStatus');
        weatherType.innerText = `${weather.weather[0].description} `;
    
        document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`);
 }

// function notFound (){
//     let city = document.getElementById("city");
//     city.innerText = ` `
//     let temperature = document.getElementById('temp');
//     temperature.innerText  =  ` `
//     let weatherType = document.getElementById('weatherStatus');
//     weatherType.innerText = ` `;

//     document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`);
// }

// let city = document.getElementById("city");
//     city.innerText = `${weather.name} ${weather.sys.country}`
//     let temperature = document.getElementById('temp');
//     temperature.innerText  =  `${Math.round(weather.main.temp-273.15)}`
//     let weatherType = document.getElementById('weatherStatus');
//     weatherType.innerText = `${weather.weather[0].description} `;

//     document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`);














 