import { library } from '@fortawesome/fontawesome-svg-core'
import { faCloud, faBolt, faSun, faPooStorm, faCloudSun, 
        faCloudShowersHeavy, faCloudRain, faCloudMeatball, 
        faCloudBolt, faPoo, faSmog, faCloudShowersWater} from '@fortawesome/free-solid-svg-icons'

//Allows usage of icons in other components
library.add(faCloud, faBolt,faSun,faPooStorm,faCloudSun,faCloudShowersHeavy,faCloudRain,faCloudMeatball,faCloudBolt,faPoo,faSmog, faCloudShowersWater)

const weatherDescription = { 
    0: 'Clear',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Depositing rime fog',
    51: 'Drizzle',
    53: 'Drizzle',
    55: 'Drizzle',
    56: 'Freezing Drizzle',
    57: 'Freezing Drizzle',
    61: 'Rain',
    63: 'Rain',
    65: 'Rain',
    66: 'Freezing Rain',
    67: 'Freezing Rain',
    71: 'Snow fall',
    73: 'Snow fall',
    75: 'Snow fall',
    77: 'Snow grains',
    80: 'Rain showers',
    81: 'Rain showers',
    82: 'Rain showers',
    85: 'Snow showers',
    86: 'Snow showers',
    95: 'Thunderstorm',
    96: 'Thunderstorm with hail',
    99: 'Thunderstorm with hail'
  }

  const weatherIcon = {
    0: 'fa-solid fa-sun',
    1: 'fa-solid fa-cloud-sun',
    2: 'fa-solid fa-cloud-sun',
    3: 'fa-solid fa-cloud',
    45: 'fa-solid fa-cloud-smog',
    48: 'fa-solid fa-cloud-smog',
    51: 'fa-solid fa-cloud-rain',
    53: 'fa-solid fa-cloud-rain',
    55: 'fa-solid fa-cloud-rain',
    56: 'fa-solid fa-cloud-rain',
    57: 'fa-solid fa-cloud-rain',
    61: 'fa-solid fa-cloud-rain',
    63: 'fa-solid fa-cloud-rain',
    65: 'fa-solid fa-cloud-showers-heavy',
    66: 'fa-solid fa-cloud-showers-heavy',
    67: 'fa-solid fa-cloud-showers-heavy',
    71: 'fa-solid fa-cloud-meatball',
    73: 'fa-solid fa-cloud-meatball',
    75: 'fa-solid fa-cloud-meatball',
    77: 'fa-solid fa-cloud-meatball',
    80: 'fa-solid fa-cloud-showers-heavy',
    81: 'fa-solid fa-cloud-showers-heavy',
    82: 'fa-solid fa-cloud-showers-water',
    85: 'fa-solid fa-cloud-meatball',
    86: 'fa-solid fa-cloud-meatball',
    95: 'fa-solid fa-cloud-bolt',
    96: 'fa-solid fa-cloud-bolt',
    99: 'fa-solid fa-cloud-bolt'
  }

  const getIcon = (weatherCode) => {
    return weatherIcon[weatherCode]
  }

  const getDescription = (weatherCode) => {
    return weatherDescription[weatherCode]
  }

  export default {
    getIcon: getIcon,
    getDescription: getDescription
  }

