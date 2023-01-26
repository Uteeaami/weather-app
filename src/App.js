import React from 'react'
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

import MainView from './components/MainView'
import WeatherView from './components/WeatherView'


const App = () => {

  const cities = [{
    id:1,
    name: "Helsinki",
    latitude: 60.17,
    longitude: 24.95
  },
  {
    id:2,
    name: "Turku",
    latitude: 60.45,
    longitude: 22.28
  },
  {
    id:3,
    name: "Tampere",
    latitude: 61.50,
    longitude: 23.80
  }
  ]

  return (
    <div style={{backgroundColor: '#f2f2f2'}}>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <Router>
        <Routes>
          <Route path="/" element={<MainView cities={cities}></MainView>}/>
          <Route path="/:cityName" element={<WeatherView cities={cities}></WeatherView>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;