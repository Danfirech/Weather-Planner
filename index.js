// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

var api = '27f424f28b4f298aab1e3f2dc7429256'

var getTodaysWeather = (searchValue) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${api}`,
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
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
      //pull data here from object "windspeed example"
    })

    .catch((err) => console.log(err))
}

getTodaysWeather('Denver')
