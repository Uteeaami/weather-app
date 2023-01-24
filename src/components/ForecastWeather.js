import {getDescription, getIcon} from '../utils/weatherCodes'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const ForecastWeather = ({cities}) =>{

    const calculateMean = (maxTemp, minTemp) => {
      return Math.round((((maxTemp+minTemp)/2)*10)/10)
    }
  
    const daysToShow = 2
    const timeArray = cities.daily.time.slice(1, 1+daysToShow);
    const weathercodeArray = cities.daily.weathercode.slice(1, 1+daysToShow);
    const temperature_2m_maxArray = cities.daily.temperature_2m_max.slice(1, 1+daysToShow);
    const temperature_2m_minArray = cities.daily.temperature_2m_min.slice(1, 1+daysToShow);
  
    return (
      <div>
        <ul>
          <li>{cities.current_weather.time.split('T')[0]}</li>
          <li><FontAwesomeIcon icon={getIcon(cities.current_weather.weathercode)}></FontAwesomeIcon></li>
          <li>{`${cities.current_weather.temperature}°C`}</li>
          <li>{getDescription(cities.current_weather.weathercode)}</li>
        </ul>
        {timeArray.map((time, index) => {
          const weathercode = weathercodeArray[index]
          const max = temperature_2m_maxArray[index]
          const min = temperature_2m_minArray[index]
          return (
            <ul key={time}>
              <li>{time}</li>
              <li><FontAwesomeIcon icon={getIcon(weathercode)}></FontAwesomeIcon></li>
              <li>{`${calculateMean(max, min)}°C`}</li>
              <li>{getDescription(weathercode)}</li>
            </ul>
          )
        })}
      </div>
    );
  
  };

  export default ForecastWeather