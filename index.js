// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

var api = '27f424f28b4f298aab1e3f2dc7429256'

var getTodaysWeather = (searchValue) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${api}`,
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data)

      //add moments after data.name in HTML
      $('#todaysforcast').append(`

        <h1 style = "float:left">${data.name}</h1>
        <img src=" http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
        <p>Temp: ${data.main.temp}</p> 
        <p>Wind: ${data.wind.speed}</p> 
        <p>Hummidity: ${data.main.humidity}</p>
        <p>UV Index:<p/> 
        <img>
      

      
      `)

      //pull data here from object "windspeed example"
      forcast(data.coord.lat, data.coord.lon)
    })

    .catch((err) => console.log(err))
}

var forcast = (lat, lon) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api}`,
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      for (var i = 0; i < 5; i++) {
        $('#5day').append(`
      
        <h1>${data.name}</h1>
        <img src=" http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
        <p></p> 
        <p></p> 
        <p></p> 
      
      
      
      `)
      }
    })

    .catch((err) => console.log(err))
}

getTodaysWeather('San Diego')
