import { library } from '@fortawesome/fontawesome-svg-core'
import { faCloud, faBolt, faSun, faPooStorm, faCloudSun, 
        faCloudShowersHeavy, faCloudRain, faCloudMeatball, 
        faCloudBolt, faPoo, faSmog, faCloudShowersWater} from '@fortawesome/free-solid-svg-icons'

library.add(faCloud, faBolt,faSun,faPooStorm,faCloudSun,faCloudShowersHeavy,faCloudRain,faCloudMeatball,faCloudBolt,faPoo,faSmog, faCloudShowersWater)

const weatherDescription = { 
    0: 'Clear',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Depositing rime fog',
    51: 'Drizzle: Light intensity',
    53: 'Drizzle: Moderate intensity',
    55: 'Drizzle: Dense intensity',
    56: 'Freezing Drizzle: Light intensity',
    57: 'Freezing Drizzle: Dense intensity',
    61: 'Rain: Slight intensity',
    63: 'Rain: Moderate intensity',
    65: 'Rain: Heavy intensity',
    66: 'Freezing Rain: Light intensity',
    67: 'Freezing Rain: Heavy intensity',
    71: 'Snow fall: Slight intensity',
    73: 'Snow fall: Moderate intensity',
    75: 'Snow fall: Heavy intensity',
    77: 'Snow grains',
    80: 'Rain showers: Slight intensity',
    81: 'Rain showers: Moderate intensity',
    82: 'Rain showers: Violent intensity',
    85: 'Snow showers: Slight intensity',
    86: 'Snow showers: Heavy intensity',
    95: 'Thunderstorm: Slight or moderate',
    96: 'Thunderstorm with hail: Slight intensity',
    99: 'Thunderstorm with hail: Heavy intensity'
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
    73: 'fa-solid fa-cloud-meatbal',
    75: 'fa-solid fa-cloud-meatbal',
    77: 'fa-solid fa-cloud-meatbal',
    80: 'fa-solid fa-cloud-showers-heavy',
    81: 'fa-solid fa-cloud-showers-heavy',
    82: 'fa-solid fa-cloud-showers-water',
    85: 'fa-solid fa-cloud-meatball',
    86: 'fa-solid fa-cloud-meatball',
    95: 'fa-solid fa-cloud-bolt',
    96: 'fa-solid fa-cloud-bolt',
    99: 'fa-solid fa-cloud-bolt'
  }

  export function getIcon(weatherCode) {
    return weatherIcon[weatherCode]
  }

  export function getDescription(weatherCode) {
    return weatherDescription[weatherCode]
  }

