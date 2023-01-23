import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Link,
  BrowserRouter as Router,
  Routes, Route, useParams
} from "react-router-dom"

const Mainview = ({cities}) => {
  return(
    <div>
    {cities.map(city => 
      <div key={city.id}>
      <h1>{city.city}</h1>
      <Link to={`/${city.city}`}>Button</Link>
      </div>
      )}
    </div>
  )
}



const City = ({cities}) => {
  const [city, setCity] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const {name} = useParams()

  const lat = cities.find(single => single.city === name)


  //Pystyykö änkee lat == city nii ois steitissä
  useEffect(() => {
    axios
      .get(`https://api.open-meteo.com/v1/forecast?latitude=${lat.latitude}&longitude=${lat.longitude}&current_weather=true&windspeed_unit=ms&timezone=auto`)
      .then(response => {
        console.log('promise fulfilled')
        console.log(response.data)
        setCity(response.data)
        setIsLoading(false)
      })
  }, [])

  if(isLoading){
    return <div className="Loading">Loading...</div>;
  }

  return(
    <div>
      <h1>{lat.city}</h1>
      <p>{`${city.current_weather.temperature}°C`}</p>
      <p>{city.current_weather.weathercode}</p>
      <p>{city.current_weather.time.split('T')[0]}</p>
      <Link to={'/'}>Back</Link>
    </div>
  )
}

const App = () => {
  const cities = [{
    id:1,
    city: "Helsinki",
    latitude: 60.17,
    longitude: 24.95
  },
  {
    id:2,
    city: "Turku",
    latitude: 60.45,
    longitude: 22.28
  },
  {
    id:3,
    city: "Tampere",
    latitude: 61.50,
    longitude: 23.80
  },
  ]
  
  return (
    <Router>
    <div className='container'>
    <Routes>
      <Route path="/" element={<Mainview cities={cities}></Mainview>}/>
      <Route path="/:name" element={<City cities={cities}></City>}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;


//TODO:
/**
 * 1.Kolmen päivän ennuste
 * 2.weatherLogo
 * 3.Tyylitys
 * 
 * 
 */