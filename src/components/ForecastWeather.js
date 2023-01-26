import WeatherCard from './WeatherCard';

//Component to display the weather forecast (3 Day weather)
const ForecastWeather = ({cities}) =>{

    const calculateMean = (maxTemp, minTemp) => {
      let mean = ((maxTemp+minTemp)/2)
      return mean.toFixed(1)
    }
    
    //function to format the date from YYYY-MM-DD to DD.MM.
    const formatDate = (date) => {
      return new Intl.DateTimeFormat('default', {
        day: '2-digit',
        month: '2-digit'
      }).format(new Date(date));
    }

    /**
     * Extracts weather information from cities array (Days data differs from current weather data)
     * daysToShow - determines how many days worth of information should be extracted
     */
    const daysToShow = 2
    
    const timeArray = cities.daily.time.slice(1, 1+daysToShow);
    const formattedTimeArray = timeArray.map((time) => formatDate(time));
    const weathercodeArray = cities.daily.weathercode.slice(1, 1+daysToShow);
    const maxTemperatureArray = cities.daily.temperature_2m_max.slice(1, 1+daysToShow);
    const minTemperatureArray = cities.daily.temperature_2m_min.slice(1, 1+daysToShow);

    return (
      <div className="row d-flex flex-wrap">
        <div className="col-lg-4 col-sm-12">
          <WeatherCard
            time={formatDate(cities.current_weather.time)}
            temperature={cities.current_weather.temperature}
            weathercode={cities.current_weather.weathercode}
          ></WeatherCard>
        </div>
        {formattedTimeArray.map((time, index) => {
          const weathercode = weathercodeArray[index]
          const max = maxTemperatureArray[index]
          const min = minTemperatureArray[index]
          return (
            <div key={index} className="col-lg-4 col-sm-12">
              <WeatherCard
                time={time}
                temperature={calculateMean(max, min)}
                weathercode={weathercode}
              ></WeatherCard>
            </div>
          )
        })}
      </div>
    );
  
  };

  export default ForecastWeather