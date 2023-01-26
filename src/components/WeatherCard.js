import WeatherInfo from "./WeatherInfo"

//Displays forecast data (3 days weather data)
const WeatherCard = ({weathercode, temperature, time}) => {
    return(
        <div>
          <p>{time}</p>
          <WeatherInfo
            icon={weathercode}
            temperature={temperature}
            weathercode={weathercode}
          ></WeatherInfo>
        </div>
    )
}

export default WeatherCard