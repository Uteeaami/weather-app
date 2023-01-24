import React from 'react'
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom"

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
    <Router>
    <div className='container'>
    <Routes>
      <Route path="/" element={<MainView cities={cities}></MainView>}/>
      <Route path="/:name" element={<WeatherView cities={cities}></WeatherView>}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;


//TODO:
/**
 * 
 * 3.Tyylitys
 * 
 * 
 */