import { useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import CurrentWeather from './CurrentWeather'
import ForecastWeather from './ForecastWeather'

const WeatherView = ({cities}) => {
    const [city, setCity] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);
    const [showCurrentWeather, setShowCurrentWeather] = useState(true)
    const {cityName} = useParams()
    const url = "https://api.open-meteo.com/v1/forecast"

    const findCity = (name, cities) => {
      return cities.find(single => single.name === name)
    }
    const coordinates = findCity(cityName, cities)

    //useEffect hook to get data from url
    useEffect(() => {
      axios
        .get(`${url}?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto`)
        .then(response => {
          setCity(response.data)
          setIsLoading(false)
        })
        .catch(error => {
          setError(error.message);
        })
    }, [error])
  
    if(isLoading){
      return <div className="Loading">Loading...</div>;
    }
  
    return(
      <div className='d-flex align-items-center justify-content-center' style={{height:'100vh'}}>
        <div className='d-flex flex-column'>
          <div className='city-name'>
            <h1>{coordinates.name}</h1>
          </div>
          {error && (
            <div className="error-message">
              <p>An error has occurred: {error}</p>
              <Button onClick={() => setError(null)}>Retry</Button>
            </div>
          )}
          <div className='weather-display'>
            {showCurrentWeather
              ? <CurrentWeather cities={city}></CurrentWeather>
              : <ForecastWeather cities={city}></ForecastWeather>
            }
          </div>
          <div className='showonebutton-container'>
            <FormControlLabel 
              control={<Switch onClick={() => setShowCurrentWeather(!showCurrentWeather)} />} 
              label={showCurrentWeather ? '1 Day' : '3 Days'}
              labelPlacement="top"
            ></FormControlLabel>
          </div>
          <div className='backbutton-container'>
            <Button variant="primary" as={Link}
              to={'/'}>Go back
            </Button>
          </div>
        </div>
      </div>
    )
  }

  export default WeatherView