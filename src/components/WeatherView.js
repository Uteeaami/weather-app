import { useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

import CurrentWeather from './CurrentWeather'
import ForecastWeather from './ForecastWeather'

const WeatherView = ({cities}) => {
    const [city, setCity] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [showOne, setShowOne] = useState(true)
    const {name} = useParams()
  
    const lat = cities.find(single => single.name === name)
  
    useEffect(() => {
      axios
        .get(`https://api.open-meteo.com/v1/forecast?latitude=${lat.latitude}&longitude=${lat.longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto`)
        .then(response => {
          setCity(response.data)
          setIsLoading(false)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])
  
    if(isLoading){
      return <div className="Loading">Loading...</div>;
    }
  
    return(
      <div>
        <h1>{lat.name}</h1>
        {showOne 
        ? <CurrentWeather cities={city}></CurrentWeather>
        : <ForecastWeather cities={city}></ForecastWeather>
        }
        <button onClick={() => setShowOne(!showOne)}>{showOne ? '3 Day' : '1 Day'}</button>
          <div>
            <Link to={'/'}>Back</Link>
          </div>
      </div>
    )
  }

  export default WeatherView