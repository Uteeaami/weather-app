import {
    Link
  } from "react-router-dom"

const MainView = ({cities}) => {
    return(
      <div>
      {cities.map(city => 
        <div key={city.id}>
        <h1>{city.name}</h1>
        <Link to={`/${city.name}`}>Button</Link>
        </div>
        )}
      </div>
    )
  }

  export default MainView