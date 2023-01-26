import WeatherInfo from './WeatherInfo'

//Displays the current weather (1 Day weather)
const CurrentWeather = ({cities}) =>{
    return(
      <div>
        <p style={{padding:'12px'}}></p>
        <WeatherInfo
          icon={cities.current_weather.weathercode}
          temperature={cities.current_weather.temperature}
          weathercode={cities.current_weather.weathercode}
        ></WeatherInfo>
      </div>
    )
  }

  export default CurrentWeather