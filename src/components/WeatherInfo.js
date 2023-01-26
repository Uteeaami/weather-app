import weatherService from '../utils/weatherCodes'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

//Component to display weathericon, temperature and weathers description
const WeatherInfo = ({temperature, weathercode}) =>{
    return(
        <div className='d-flex flex-column align-items-center'>
            <p className='fa-4x'><FontAwesomeIcon icon={weatherService.getIcon(weathercode)}></FontAwesomeIcon></p>
            <p className='temperature'>{`${temperature}°C`}</p>
            <p className='weathercode'>{weatherService.getDescription(weathercode)}</p>
        </div>
    )
}

export default WeatherInfo