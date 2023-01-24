import {getDescription, getIcon} from '../utils/weatherCodes'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


const CurrentWeather = ({cities}) =>{

    return(
      <div>
        <FontAwesomeIcon icon={getIcon(cities.current_weather.weathercode)}></FontAwesomeIcon>
        <p>{`${cities.current_weather.temperature}°C`}</p>
        <p>{getDescription(cities.current_weather.weathercode)}</p>
      </div>
    )
  }

  export default CurrentWeather